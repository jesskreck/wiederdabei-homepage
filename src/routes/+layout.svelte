<script lang="ts">
	import '../app.css';
	import { De, Ae, Tr, Ru } from 'svelte-flags';
	import { currentLang, setLanguage } from '$lib/i18n/i18n';

	let { children } = $props();
</script>

<main>{@render children()}</main>
<div class="fixed bottom-4 flex w-full items-center justify-around z-50">
	<ul class="menu menu-horizontal bg-base-200 rounded-box shadow-lg">
		<li>
			<button
				class={$currentLang === 'de' ? 'active' : ''}
				on:click={() => setLanguage('de')}
				aria-label="Deutsch"
			>
				<De />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'en' ? 'active' : ''}
				on:click={() => setLanguage('en')}
				aria-label="English"
			>
				<Ae />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'tr' ? 'active' : ''}
				on:click={() => setLanguage('tr')}
				aria-label="Türkçe"
			>
				<Tr />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'ru' ? 'active' : ''}
				on:click={() => setLanguage('ru')}
				aria-label="Русский"
			>
				<Ru />
			</button>
		</li>
	</ul>
</div>