<script>
	import { _, locale } from '../services/i18n';
	export let light = false;
	const langs = [
		{ code: 'sv', label: 'SV', name: 'Svenska' },
		{ code: 'en', label: 'EN', name: 'English' }
	];
</script>

<div class="lang" class:light role="group" aria-label={$_('contact.language')}>
	{#each langs as l, i}
		{#if i > 0}<span aria-hidden="true">/</span>{/if}
		<button
			type="button"
			lang={l.code}
			aria-label={l.name}
			aria-pressed={$locale === l.code}
			class:current={$locale === l.code}
			on:click={() => locale.set(l.code)}>{l.label}</button>
	{/each}
</div>

<style>
	.lang { display: inline-flex; align-items: center; gap: 6px; font: 700 13px/1 var(--sans); letter-spacing: .1em; color: var(--muted); }
	.lang.light { color: rgba(255,255,255,.7); }
	button {
		background: none; border: 0; padding: 6px 2px; margin: 0; cursor: pointer;
		font: inherit; letter-spacing: inherit; color: inherit; opacity: .7;
	}
	button:hover { opacity: 1; }
	button.current { opacity: 1; color: var(--ink); text-decoration: underline; text-underline-offset: 4px; }
	.light button.current { color: #fff; }
</style>
