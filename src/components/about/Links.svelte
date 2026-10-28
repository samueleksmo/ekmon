<script>
	import { _ } from '../../services/i18n';
	import { EMAIL, LINKEDIN } from '../../config';
</script>

<div class="links">
	<a href={'mailto:' + EMAIL}>
		{$_('hero.ctaSecondary')}
		<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" fill="currentColor"/></svg>
	</a>
	<a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
		LinkedIn
		<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" fill="currentColor"/></svg>
	</a>
</div>

<style>
	.links { display: flex; flex-wrap: wrap; gap: 12px 32px; margin-top: 44px; }
	a {
		display: inline-flex; align-items: center; gap: 6px;
		font: 700 14px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;
		color: var(--navy); text-decoration: none;
		padding-bottom: 6px; border-bottom: 1px solid var(--navy);
	}
	a:hover { color: var(--accent); border-color: var(--accent); }
</style>
