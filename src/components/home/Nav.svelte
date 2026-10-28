<script>
	import { _ } from '../../services/i18n';
	import LangSwitch from '../LangSwitch.svelte';
	import Sidebar from './Sidebar.svelte';

	let y = 0;
	let open = false;
	$: solid = y > 40 || open;

	const links = ['about', 'projects', 'contact'];

	function onKey(e) {
		if (e.key === 'Escape') open = false;
	}
</script>

<svelte:window bind:scrollY={y} on:keydown={onKey} />

<header class:solid>
	<div class="container bar">
		<a class="brand" href="#top" on:click={() => (open = false)} aria-label="Ekmon AB – home">
			<img src="images/houseMiddle.png" alt="" width="40" height="26" />
			<span>EKMON</span>
		</a>

		<nav class="desktop" aria-label="Main">
			{#each links as l}
				<a href={'#' + l}>{$_('nav.' + l)}</a>
			{/each}
			<LangSwitch light={!solid} />
		</nav>

		<button
			class="toggle"
			type="button"
			aria-expanded={open}
			aria-controls="mobile-menu"
			aria-label={open ? $_('nav.close') : $_('nav.menu')}
			on:click={() => (open = !open)}>
			<span class:open></span><span class:open></span><span class:open></span>
		</button>
	</div>

	<Sidebar bind:open {links} />
</header>

<style>
	header {
		position: fixed; inset: 0 0 auto 0; z-index: 50;
		color: #fff;
		transition: background-color .25s, box-shadow .25s, color .25s;
	}
	header.solid {
		background: rgba(252, 251, 251, .96);
		color: var(--ink);
		box-shadow: 0 1px 0 var(--line);
		backdrop-filter: saturate(1.4) blur(8px);
	}
	.bar { height: var(--header-h); display: flex; align-items: center; justify-content: space-between; }

	.brand { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; }
	.brand img { width: 40px; height: auto; }
	header:not(.solid) .brand img { filter: brightness(0) invert(1); }
	.brand span { font: 700 20px/1 var(--sans); letter-spacing: .22em; }

	.desktop { display: none; align-items: center; gap: 36px; }
	.desktop a {
		font: 700 14px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;
		text-decoration: none; padding: 6px 0; border-bottom: 1px solid transparent;
	}
	.desktop a:hover { border-color: currentColor; }

	.toggle {
		width: 44px; height: 44px; display: grid; place-content: center; gap: 6px;
		background: none; border: 0; padding: 0; cursor: pointer; color: inherit;
	}
	.toggle span { display: block; width: 26px; height: 2px; background: currentColor; transition: transform .2s, opacity .2s; }
	.toggle span.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
	.toggle span.open:nth-child(2) { opacity: 0; }
	.toggle span.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

	@media (min-width: 860px) {
		.desktop { display: flex; }
		.toggle { display: none; }
	}
</style>
