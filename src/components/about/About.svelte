<script>
	import { _, json } from '../../services/i18n';
	import Links from './Links.svelte';
</script>

<section id="about">
	<div class="container grid">
		<div class="intro">
			<p class="eyebrow">{$_('nav.about')}</p>
			<h2>{$_('about.heading')}</h2>
			<dl class="facts">
				<div><dt>{$_('about.founded')}</dt><dd>2012</dd></div>
				<div><dt>{$_('about.based')}</dt><dd>Norrköping</dd></div>
				<div><dt>{$_('about.focus')}</dt><dd>{$_('about.focusValue')}</dd></div>
			</dl>
		</div>

		<div class="body">
			<p class="lead">{$_('about.p1')}</p>
			<p>{$_('about.p2')}</p>

			<h3>{$_('about.expertiseHeading')}</h3>
			<ul class="tags">
				{#each $json('about.expertise') || [] as item}
					<li>{item}</li>
				{/each}
			</ul>

			<Links />
		</div>
	</div>
</section>

<style>
	section { padding: clamp(80px, 12vw, 140px) 0; background: var(--paper); }
	.grid { display: grid; gap: 48px; }
	h2 { font-size: clamp(36px, 4.5vw, 52px); color: var(--navy); }

	.facts { margin: 36px 0 0; display: grid; gap: 18px; }
	.facts div { border-top: 1px solid var(--line); padding-top: 12px; }
	dt { font: 700 12px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; color: var(--muted); }
	dd { margin: 6px 0 0; font: 400 24px/1.2 var(--serif); color: var(--navy); }

	.body p { margin: 0 0 20px; color: var(--muted); max-width: 62ch; }
	.body .lead { font-size: clamp(20px, 2.2vw, 24px); line-height: 1.5; color: var(--ink); }

	h3 {
		margin: 40px 0 16px;
		font: 700 13px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; color: var(--navy);
	}
	.tags { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
	.tags li {
		padding: 8px 14px; border: 1px solid var(--line); border-radius: 999px;
		font-size: 15px; line-height: 1.2; color: var(--ink); background: #fff;
	}

	@media (min-width: 900px) {
		.grid { grid-template-columns: 1fr 1.6fr; gap: 80px; }
		.intro { position: sticky; top: calc(var(--header-h) + 32px); align-self: start; }
	}
</style>
