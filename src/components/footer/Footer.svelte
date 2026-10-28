<script>
	import { _ } from '../../services/i18n';
	import { EMAIL, LINKEDIN } from '../../config';
	import LangSwitch from '../LangSwitch.svelte';
	const year = new Date().getFullYear();
</script>

<footer id="contact">
	<div class="container">
		<div class="cta">
			<div>
				<p class="eyebrow">{$_('nav.contact')}</p>
				<h2>{$_('contact.heading')}</h2>
				<p class="text">{$_('contact.text')}</p>
			</div>
			<div class="details">
				<span class="label">{$_('contact.email')}</span>
				<a class="email" href={'mailto:' + EMAIL}>{EMAIL}</a>
				<span class="label">LinkedIn</span>
				<a href={LINKEDIN} target="_blank" rel="noopener noreferrer">Ekmon AB</a>
			</div>
		</div>

		<div class="bottom">
			<a class="brand" href="#top">
				<img src="images/houseMiddle.png" alt="" width="40" height="26" />
				<span>Ekmon AB</span>
			</a>
			<p>© {year} Ekmon AB · Norrköping. {$_('contact.rights')}</p>
			<LangSwitch />
		</div>
	</div>
</footer>

<style>
	footer { background: var(--paper); padding: clamp(80px, 12vw, 120px) 0 32px; border-top: 1px solid var(--line); }
	.cta { display: grid; gap: 40px; padding-bottom: 64px; border-bottom: 1px solid var(--line); }
	h2 { font-size: clamp(36px, 4.5vw, 52px); color: var(--navy); }
	.text { color: var(--muted); max-width: 48ch; margin: 16px 0 0; }
	.details { display: grid; gap: 4px; align-content: start; }
	.label { font: 700 12px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; color: var(--muted); margin-top: 16px; }
	.label:first-child { margin-top: 0; }
	.details a { font: 400 clamp(22px, 2.6vw, 30px)/1.3 var(--serif); color: var(--navy); text-decoration: none; overflow-wrap: anywhere; }
	.details a:hover { color: var(--accent); }

	.bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding-top: 28px; }
	.brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 700; letter-spacing: .06em; }
	.brand img { width: 34px; height: auto; }
	.bottom p { margin: 0; font-size: 14px; color: var(--muted); }

	@media (min-width: 900px) {
		.cta { grid-template-columns: 1.4fr 1fr; align-items: end; }
	}
</style>
