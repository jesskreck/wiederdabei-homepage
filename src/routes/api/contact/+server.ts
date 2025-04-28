import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST({ request }) {
	try {
		const body = await request.json();
		const { email, name, phone, type, language } = body;

		// Validierung basierend auf dem Anfragetyp
		if (type === 'email') {
			if (!email || typeof email !== 'string') {
				return json({ success: false, error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
			}

			// E-Mail in contacts Tabelle speichern mit entsprechendem Typ und Sprache
			const { data, error } = await supabase
				.from('contacts')
				.insert([{ 
					email,
					type: 'email',
					language: language || 'de',
					created_at: new Date().toISOString()
				}]);

			if (error) {
				console.error('Supabase Fehler:', error);
				return json({ success: false, error: error.message || 'Datenbankfehler' }, { status: 500 });
			}

			return json({ success: true, data });
		}
		
		// Rückrufanfrage
		else if (type === 'callback') {
			if (!name || typeof name !== 'string') {
				return json({ success: false, error: 'Name ist erforderlich' }, { status: 400 });
			}
			if (!phone || typeof phone !== 'string') {
				return json({ success: false, error: 'Telefonnummer ist erforderlich' }, { status: 400 });
			}

			// Rückrufanfrage in contacts Tabelle speichern
			const { data, error } = await supabase
				.from('contacts')
				.insert([{ 
					name,
					phone,
					type: 'callback',
					language: language || 'de',
					created_at: new Date().toISOString()
				}]);

			if (error) {
				console.error('Supabase Fehler:', error);
				return json({ success: false, error: error.message || 'Datenbankfehler' }, { status: 500 });
			}

			return json({ success: true, data });
		}
		
		// Unbekannter Anfragetyp
		else {
			return json({ success: false, error: 'Ungültiger Anfragetyp' }, { status: 400 });
		}
	} catch (err) {
		console.error('Fehler bei der Kontaktanfrage:', err);
		return json({ success: false, error: 'Serverfehler' }, { status: 500 });
	}
}