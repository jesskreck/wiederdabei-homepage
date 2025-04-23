<script lang="ts">
	import '../app.css';
	import { De, Gb, Ae, Tr, Ru } from 'svelte-flags';
	import { currentLang, setLanguage } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';

	let { children } = $props();
	let showLanguageBar = $state(true);
	let lastScrollY = $state(0);
	let isAtBottom = $state(false);

	onMount(() => {
		// Prüft, ob der Nutzer am Ende der Seite ist
		function checkIfAtBottom() {
			const tolerance = 50; // Pixel-Toleranz für "am Ende"
			const bottomPosition = document.documentElement.scrollHeight - window.innerHeight - tolerance;
			isAtBottom = window.scrollY >= bottomPosition;
			showLanguageBar = !isAtBottom;
			lastScrollY = window.scrollY;
		}

		window.addEventListener('scroll', checkIfAtBottom);
		
		// Initial einmal prüfen
		checkIfAtBottom();
		
		return () => {
			window.removeEventListener('scroll', checkIfAtBottom);
		};
	});
</script>

<main class="overflow-x-hidden">{@render children()}</main>

{#if showLanguageBar}
<div class="fixed bottom-4 flex w-full items-center justify-around z-50 transition-opacity duration-300" 
     style="opacity: {showLanguageBar ? '1' : '0'}">
	<ul class="menu menu-horizontal bg-base-200 rounded-box shadow-lg max-w-[calc(100vw-2rem)] mx-auto overflow-x-auto">
		<li>
			<button
				class={$currentLang === 'de' ? 'active' : ''}
				onclick={() => setLanguage('de')}
				aria-label="Deutsch"
			>
				<De />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'en' ? 'active' : ''}
				onclick={() => setLanguage('en')}
				aria-label="English"
			>
				<Gb />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'ae' ? 'active' : ''}
				onclick={() => setLanguage('ae')}
				aria-label="عربي"
			>
				<Ae />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'tr' ? 'active' : ''}
				onclick={() => setLanguage('tr')}
				aria-label="Türkçe"
			>
				<Tr />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'ru' ? 'active' : ''}
				onclick={() => setLanguage('ru')}
				aria-label="Русский"
			>
				<Ru />
			</button>
		</li>
	</ul>
</div>
{/if}