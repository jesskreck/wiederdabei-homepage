# .gitignore

```
node_modules

# Output
.output
.vercel
.netlify
.wrangler
/.svelte-kit
/build

# OS
.DS_Store
Thumbs.db

# Env
.env
.env.*
!.env.example
!.env.test

# Vite
vite.config.js.timestamp-*
vite.config.ts.timestamp-*

```

# .npmrc

```
engine-strict=true

```

# .prettierignore

```
# Package Managers
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lock
bun.lockb

```

# .prettierrc

```
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	]
}

```

# package.json

```json
{
	"name": "wiederdabei-homepage",
	"private": true,
	"version": "0.0.1",
	"type": "module",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"format": "prettier --write .",
		"lint": "prettier --check ."
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "^6.0.0",
		"@sveltejs/kit": "^2.16.0",
		"@sveltejs/vite-plugin-svelte": "^5.0.0",
		"@tailwindcss/forms": "^0.5.9",
		"@tailwindcss/typography": "^0.5.15",
		"@tailwindcss/vite": "^4.0.0",
		"daisyui": "^5.0.27",
		"prettier": "^3.4.2",
		"prettier-plugin-svelte": "^3.3.3",
		"prettier-plugin-tailwindcss": "^0.6.11",
		"svelte": "^5.0.0",
		"svelte-check": "^4.0.0",
		"svelte-hero-icons": "^5.2.0",
		"tailwindcss": "^4.0.0",
		"typescript": "^5.0.0",
		"vite": "^6.2.5"
	},
	"dependencies": {
		"svelte-typewrite": "^3.0.0",
		"svelte-typewriter": "^3.2.3"
	}
}

```

# README.md

```md
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

\`\`\`bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
\`\`\`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

\`\`\`bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
\`\`\`

## Building

To create a production version of your app:

\`\`\`bash
npm run build
\`\`\`

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

```

# src\app.css

```css
@import 'tailwindcss';
@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';
@plugin "daisyui" {
    themes: all
}

```

# src\app.d.ts

```ts
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

```

# src\app.html

```html
<!doctype html>
<html lang="en" data-theme="dim">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>

```

# src\lib\index.ts

```ts
// place files you want to import through the `$lib` alias in this folder.

```

# src\routes\+layout.svelte

```svelte
<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

```

# src\routes\+page.svelte

```svelte
<script>
	import { TypeWriter } from 'svelte-typewrite';
	import { ArrowRight, Icon } from 'svelte-hero-icons';

	const beispiele = [
		{
			header: '„Mit 60 nochmal anfangen?',
			text: 'Ja – wenn man mich lässt.“ ',
			sub: 'Komm als <strong>Tagesmutter</strong> in eine Nachbarschaftshilfe.'
		},
		{
			header: '“Ich hab 20 Jahre malocht.',
			text: 'Ich will, dass das was zählt.”',
			sub: 'Komm als <strong>Mechaniker</strong> in eine Fahrradwerkstatt.'
		},
		{
			header: '„Genug Papierkram.',
			text: 'Ich will arbeiten – und zwar richtig.“',
			sub: 'Komm als <strong>Betreuungsassistenz</strong> in eine Tagespflege.'
		},
		{
			header: '„Arbeiten? Trau ich mir wieder zu.',
			text: 'In einem fairen Arbeitsumfeld.“',
			sub: 'Komm als <strong>Grünpflegekraft</strong> in deine Kommune.'
		}
	];

	const FAQ = [
		{
			frage: 'Wer kann eure Dienste in Anspruch nehmen?',
			antwort:
				'Unsere Dienste richten sich an alle, die nach einer längeren Pause (mehr als zwei Jahre) wieder ins Berufsleben einsteigen möchten oder trotz Ablehnung und Herausforderungen eine neue berufliche Chance suchen. Egal ob nach Elternzeit, Krankheit, Arbeitslosigkeit oder beruflicher Neuorientierung – wir helfen dir, wieder Fuß zu fassen.'
		},
		{
			frage: 'Muss ich eine Bewerbung schreiben?',
			antwort:
				'Nein. Wirklich nicht. Kein Lebenslauf, kein Anschreiben. Wir reden mit dir, du erzählst uns, was du kannst – und wir übernehmen den Rest.'
		},
		{
			frage: 'Ich kann mir nicht mehr vorstellen einen normalen Job zu haben.',
			antwort:
				'Verstehen wir. Viele hier sind schon durch alles durch – Maßnahmen, Bewerbungen, Absagen. Der Unterschied: Bei uns gibt’s Jobs, weil wir vorher dafür sorgen, dass Geld da ist. Und: Du wirst gebraucht, nicht verwaltet. Wenn du willst, finden wir gemeinsam raus, was möglich ist.'
		},
		{
			frage: 'Wie viel kostet eure Unterstützung?',
			antwort:
				'Gar nichts. Die Vermittlung ist für dich kostenlos. Dein Gehalt übernimmt das Jobcenter – dein Arbeitgeber zahlt nur einen Teil oder sogar gar nichts. Für dich heißt das: Du bekommst einen richtigen Job mit Gehalt, Sozialversicherung, Rentenversicherung – und sogar einem Coaching, denn wir wissen wie schwer der Wiedereinstieg nach so vielen Jahren ist.'
		},
		{
			frage: 'In welchen Branchen könnt ihr vermitteln?',
			antwort:
				'Durch unsere speziellen Kooperationen mit “Wiedereinsteiger-freundlichen” Arbeitgebern eröffnen sich Chancen in Bereichen, die sonst schwer zugänglich wären. Übrigens: Wenn du 6 oder mehr Jahre nicht (oder nur wenig) gearbeitet hast, zahlt das Jobcenter deinem neuen Arbeitgeber zwei Jahre lang dein komplettes Gehalt - mit dem Argument kriegen wir jeden Arbeitgeber von dir überzeugt! Wir übernehmen das für dich.'
		},
		{
			frage: 'Wie lange dauert es, bis ich einen Job finde? ',
			antwort:
				'Das ist unterschiedlich. Manchmal geht’s schnell, manchmal dauert es ein bisschen. Aber wir bleiben dran. Und du musst nicht auf Knopfdruck bereit sein – du gibst das Tempo vor. Wir holen dich da ab, wo du gerade stehst.'
		},
		{
			frage: 'Was, wenn ich längere Zeit nicht gearbeitet habe? ',
			antwort:
				'Dann bist du genau die Person, für die dieses neue System gemacht wurde. Egal wie lange – 2 Jahre, 6 Jahre, 15 Jahre – wenn du arbeiten willst, kümmern wir uns darum, dass das wieder möglich ist.'
		},
		{
			frage: 'Was, wenn ich noch nicht weiß, ob wieder arbeiten für mich möglich ist?',
			antwort:
				'Dann finden wir es gemeinsam heraus. Erstmal ins Gespräch kommen. Du musst dich zu nichts verpflichten. Es gibt auch die Möglichkeit, über ein Praktikum langsam reinzukommen – oder einfach zu sagen: „Ich will mir das erstmal anschauen.“'
		},
		{
			frage: 'Ich helfe schon wo aus, aber ich bekomme kein Geld dafür.',
			antwort:
				'Wenn du mehr als 6 Jahre arbeitslos warst (oder nur sehr wenig gearbeitet hast), könnte man daraus vielleicht einen richtigen Job machen – mit Gehalt, Versicherung und Unterstützung. Melde dich bei uns. Wir prüfen das.'
		}
	];
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div
		class="hero min-h-screen pt-16 pb-24 [background:radial-gradient(125%_100%_at_50%_35%,#fff_10%,var(--color-primary)_50%)] md:pt-24 md:pb-32"
	>
		<div class="container mx-auto px-4">
			<div class="text-primary-content mx-auto max-w-4xl text-center">
				<button class="btn btn-outline btn-sm btn-round mb-20">
					Der Arbeitsmarkt braucht ein Update <span aria-hidden="true">&rarr;</span>
				</button>
				<h1 class="mb-15 text-4xl font-bold md:text-5xl lg:text-6xl">
					<TypeWriter texts={['Du bist nicht raus.', 'Du wirst gebraucht!']} />
				</h1>
				<p class="mx-auto mb-25 max-w-3xl text-xl opacity-90 md:text-2xl">
					"Nicht mehr vermittelbar?" – Schluss damit. Du bist <strong>nicht</strong> das Problem. Wir
					finden dir einen passenden Job mit Sinn.
				</p>
				<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
					<button class="btn btn-secondary btn-xl btn-wide animate-bounce"
						>Jetzt durchstarten</button
					>
					<button class="btn btn-outline btn-lg">Wie funktioniert's?</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Stats Section -->
	<section class="bg-white py-25">
		<div class="container m-auto w-full max-w-3xl">
			<div class="grid grid-cols-2 gap-4">
				{#each beispiele as beispiel}
					<div
						class="card
					text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
					[background-size:10px_10px] shadow-lg"
					>
						<div class="card-body">
							<div class="card-title font-bold">
								{beispiel.header}
							</div>
							<div class="card-title">{beispiel.text}</div>
							<div class="text-secondary mt-5">{@html beispiel.sub}</div>
						</div>
					</div>
				{/each}
				<div class="card bg-secondary text-secondary-content col-span-2 mt-5 text-center shadow-lg">
					<div class="card-body">
						<div class="text-lg font-bold">Worin bist du gut? Was liegt dir?</div>
						<div class="text-lg">Wir finden einen Arbeitgeber, der dich braucht.</div>
						<div class="mt-5 text-3xl font-bold">Lass dich von uns vermitteln.</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Email Form Section -->
	<section id="email-form">
		<div class="bg-primary m-auto w-full py-16">
			<div class="m-auto grid grid-cols-1 gap-12 p-10 lg:grid-cols-2 lg:p-30">
				<div class="card bg-base-100 shadow lg:p-10">
					<div class="card-body">
						<h2 class="card-title mb-6 text-3xl font-bold md:text-4xl">Wie helfen wir dir?</h2>
						<div class="mb-5">
							<p class="mb-3">
								Du möchtest wieder arbeiten, aber bekommst keine Chance? Die Jobcenter Maßnahmen
								bringen dich nicht weiter? Du glaubst nicht mehr daran, dass Bewerbungen schreiben
								noch etwas bringt?
							</p>
							<p class="text-primary text-lg">
								Bist du schon <strong>mehr als 2 Jahre arbeitlos</strong>, besorgen wir dir:
							</p>
						</div>
						<ul class="mb-5 space-y-4 text-lg">
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span
									>Einen sozialversicherten Job mit <strong>Tätigkeit</strong> und
									<strong>Wochenstunden</strong>, die <strong>zu dir passen</strong>.</span
								>
							</li>
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span
									>Einen <strong>Coach</strong>, der dir bei <strong>Problemen</strong> im neuen Job
									<strong>hilft</strong>.</span
								>
							</li>
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span
									>Und (wenn du willst) eine <strong>Schulung</strong>, die dir beibringt, wie du
									einen <strong>gesünderen Alltag</strong> lebst.</span
								>
							</li>
						</ul>
						<p class="text-primary text-lg">
							Trag deine <strong>E-Mail Adresse</strong> ein und wir helfen dir!
						</p>
					</div>
				</div>
				<div class="card bg-white shadow lg:p-10">
					<div class="card-body">
						<h2 class="text-primary-content mb-6 h-30 text-3xl font-bold md:text-4xl xl:h-18">
							<TypeWriter texts={['Dein Neuanfang beginnt heute']} />
						</h2>
						<p class="text-primary-content space-y-4 text-lg">
							<strong>Egal wie lange raus du warst</strong> - wir helfen dir zurück ins Berufsleben.
							Trag dich ein, um <strong>kostenlose Erstinformationen</strong> zu erhalten:
						</p>

						<fieldset class="fieldset p-4">
							<label class="label">Email</label>

							<input
								type="text"
								class="input bg-secondary/10 text-neutral w-full"
								placeholder="E-Mail Adresse eintragen"
							/>
							<button class="btn btn-secondary btn-lg mt-2"
								>Jetzt <strong>kostenlos</strong> eintragen</button
							>
							<p>Deine Daten werden vertraulich behandelt. Du kannst dich jederzeit abmelden.</p>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="px-3 py-40">
		<div class="container m-auto space-y-2">
			<h2 class="mb-6 text-center text-4xl font-bold xl:text-5xl">Häufig gestellte Fragen</h2>
			{#each FAQ as faq}
				<div class="collapse-arrow border-base-300 text-primary-content collapse border bg-white">
					<input type="radio" name="faq" />
					<div class="collapse-title font-semibold">{faq.frage}</div>
					<div class="collapse-content text-sm">{faq.antwort}</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Vorhaben Section -->
	<section class="relative bg-white py-16">
		<div
			class="absolute inset-0 bg-[radial-gradient(var(--color-neutral-content),transparent_1.5px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
		[background-size:10px_10px]"
		></div>
		<div
			class="text-primary-content mx-auto space-y-4 px-10 pt-16 pb-24 md:pt-24 md:pb-32 md:text-center xl:max-w-3xl xl:text-lg"
		>
			<h2 class="text-primary mb-6 text-center text-4xl font-bold xl:text-5xl">Was wir vorhaben</h2>
			<p>
				Wir sind keine Maßnahme. Wir sind auch kein kurzfristiger Aktionismus – wir wollen, dass
				sich strukturell etwas ändert. Dass Menschen mit Lebens- und Berufserfahrung wieder gesehen,
				gebraucht und gefördert werden.
			</p>
			<p>
				Dafür entsteht gerade eine Plattform, die dich mit <strong>
					Unternehmen, gemeinnützigen Organisationen, Nachbarschaftshilfen, Kommunen oder Vereinen
				</strong>
				zusammenbringt. Also mit Arbeitgebern, die wirklich was mit dir anfangen können -
				<strong>selbst wenn vorher kein Geld für eine Einstellung da war</strong>. Denn: Der Staat
				übernimmt einen Teil deines Gehalts. Du arbeitest, wirst gebraucht – und bleibst Teil der
				Gesellschaft.
			</p>
			<p>
				Der rechtliche Rahmen dafür heißt Passiv-Aktiv-Transfer (PAT). Die Idee: Statt dir
				Bürgergeld zu zahlen, wird dieses Geld genutzt, um dir wieder einen echten Job zu
				ermöglichen - <strong
					>sozialversicherungspflichtig, bezahlt, mit Unterstützung und mit Perspektive</strong
				>.
			</p>
			<div class="card bg-primary text-primary-content">
				<div class="card-body">
					<p class="text-lg">
						Es ist noch nicht alles fertig. Aber wir sind dran. Und wenn du willst, bist du einer
						der Ersten, für die es bald wieder heißt: „<i>Willkommen zurück</i>.“
					</p>
				</div>
			</div>
			<div class="collapse-plus border-base-300 text-primary-content collapse border bg-white">
				<input type="checkbox" name="faq" />
				<div class="collapse-title">Wie funktioniert das mit dem PAT genau?</div>
				<div class="collapse-content space-y-2 text-left text-sm">
					<p>
						Der Passiv-Aktiv-Transfer (kurz: PAT) ist eine staatliche Förderlogik, die Menschen
						nicht mehr in Arbeitslosigkeit verwaltet – sondern Jobs mit gesellschaftlichem Mehrwert
						für sie schafft. Das PAT wurde vor Jahren als Modellprojekt von der Diakonie entwickelt.
					</p>

					<p>
						Statt weiterhin Leistungen wie das Bürgergeld direkt an Arbeitslose auszuzahlen, bündelt
						das Jobcenter diese Mittel und nutzt sie, um einen Teil deines Gehalts zu übernehmen. So
						entstehen echte, bezahlte Arbeitsplätze – auch dort, wo Arbeitgeber vorher sagen
						mussten:
						<em>„Wir würden ja gerne wen einstellen, aber wir können uns das nicht leisten.“</em>
					</p>

					<p class="mt-5"><strong>Das Besondere daran:</strong></p>
					<ul class="list-inside list-disc space-y-2">
						<li>
							Du schaffst dir deinen eigenen regulären, sozialversicherungspflichtigen Job, in dem
							Bereich, in dem du arbeiten möchtest.
						</li>
						<li>
							Du wirst nicht einfach „beschäftigt“ oder in eine Maßnahme gesteckt, sondern mit
							richtigem Gehalt eingestellt.
						</li>
						<li>
							Und: Dein Gehalt setzt sich aus dem Anteil des Arbeitgebers und der Förderung
							zusammen.
						</li>
					</ul>

					<p class="mt-5">
						<strong
							>Unsere Mission: Wer arbeiten will, soll arbeiten können. Sag uns, was du kannst – wir
							finden oder schaffen den Job dafür.</strong
						>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-15">
		<div class="container m-auto max-w-3xl  text-center">
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">Das System hat dich vergessen. Wir nicht.</h2>
			<p class="mb-8 text-xl">
				Wer arbeiten will, soll arbeiten können. Dein Alter, deine Herkunft, deine Lücken im
				Lebenslauf oder die Rückschläge aus deiner Vergangenheit definieren nicht deine Zukunft. Wir
				organisieren dafür echte, geförderte Jobs – abgestimmt auf deinen Interessen, deinen
				Fähigkeiten und deiner Lebenssituation.
			</p>
			<button class="btn btn-secondary animate-bounce btn-lg btn-wide">Lass dich vermitteln</button>
		</div>
	</section>

	<!-- Footer Section -->
	<section class="bg-base-300 py-5">
		<div class="container text-center text-sm">
			<a class="link link-hover" href="/impressum">Impressum & Datenschutzerklärung</a>
		</div>
	</section>
</div>

```

# src\routes\impressum\+page.svelte

```svelte
<div data-theme="cupcake" class="min-h-screen p-2 lg:p-20 space-y-5 lg:space-y-50">
    <!-- Impressum -->
    <section id="impressum" class="container">
      <h1 class="text-3xl font-bold mb-4">Impressum</h1>
      <p class="font-semibold">Angaben gemäß § 5 TMG</p>
      <p class="mb-4">
        Jessica Krecker<br>
        Kulmer Straße 24<br>
        10783 Berlin<br>
        Deutschland
      </p>
      <p class="mb-4">
        <span class="font-semibold">Kontakt:</span><br>
        E-Mail: <a class="link link-primary" href="mailto:hallo@jesskreck.de">hallo@jesskreck.de</a>
      </p>
      <p>
        <span class="font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</span><br>
        Jessica Krecker<br>
        Adresse wie oben
      </p>
    </section>
  
    <!-- Datenschutzerklärung -->
    <section id="datenschutz" class="container">
      <h2 class="text-2xl font-bold mb-4">Datenschutzerklärung</h2>
  
      <p class="mb-4">
        <span class="font-semibold">1. Verantwortlich</span><br>
        Jessica Krecker<br>
        Adresse wie im Impressum<br>
        E-Mail: <a class="link link-primary" href="mailto:hallo@jesskreck.de">hallo@jesskreck.de</a>
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">2. Erhebung und Verarbeitung personenbezogener Daten</span><br>
        Wenn du dich für meinen Newsletter anmeldest oder mir über ein Kontaktformular schreibst, speichere ich deine Angaben (z. B. Name, E-Mail-Adresse), um dir zu antworten oder dir den Newsletter zu schicken.
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">3. Newsletter</span><br>
        Für den Versand nutze ich das sogenannte Double-Opt-In-Verfahren. Du bekommst nach Anmeldung eine E-Mail, in der du deine Anmeldung bestätigen musst. Du kannst dich jederzeit wieder abmelden – jeder Newsletter enthält einen Abmeldelink.
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">4. Weitergabe von Daten</span><br>
        Ich gebe deine Daten nicht ohne deine Einwilligung weiter.
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">5. Deine Rechte</span><br>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung deiner Daten. Schreib mir einfach eine E-Mail.
      </p>
  
      <p>
        <span class="font-semibold">6. Hosting & Tools</span><br>
        Falls ich externe Dienste (z. B. Mailchimp, Sendinblue) nutze, wird das hier ergänzt – inkl. Link zur Datenschutzerklärung des jeweiligen Anbieters.
      </p>
    </section>
  </div>
  
```

# static\favicon.png

This is a binary file of the type: Image

# svelte.config.js

```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() }
};

export default config;

```

# tsconfig.json

```json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
	// Path aliases are handled by https://svelte.dev/docs/kit/configuration#alias
	// except $lib which is handled by https://svelte.dev/docs/kit/configuration#files
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
}

```

# vite.config.ts

```ts
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
});

```

