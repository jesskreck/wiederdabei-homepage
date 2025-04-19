<script lang="ts">
	import '../app.css';
	import Hotjar from '@hotjar/browser';

	const siteId = 6377167;
	const hotjarVersion = 6;

	Hotjar.init(siteId, hotjarVersion);

	let { children } = $props();
</script>

{@render children()}
