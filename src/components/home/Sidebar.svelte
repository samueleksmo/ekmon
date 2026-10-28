<script>
	import { slide } from 'svelte/transition';
	import { _ } from '../../services/i18n';
	import LangSwitch from '../LangSwitch.svelte';

	export let open = false;
	export let links = [];
</script>

{#if open}
	<nav id="mobile-menu" aria-label="Mobile" transition:slide={{ duration: 200 }}>
		<div class="container">
			{#each links as l}
				<a href={'#' + l} on:click={() => (open = false)}>{$_('nav.' + l)}</a>
			{/each}
			<div class="lang"><LangSwitch /></div>
		</div>
	</nav>
{/if}

<style>
	nav { background: var(--paper); border-top: 1px solid var(--line); box-shadow: 0 12px 24px rgba(0,0,0,.08); }
	.container { display: flex; flex-direction: column; padding-top: 8px; padding-bottom: 20px; }
	a {
		padding: 14px 0; border-bottom: 1px solid var(--line);
		font: 400 26px/1.2 var(--serif); color: var(--ink); text-decoration: none;
	}
	.lang { padding-top: 16px; }
	@media (min-width: 860px) { nav { display: none; } }
</style>
