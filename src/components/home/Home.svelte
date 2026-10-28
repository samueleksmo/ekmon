<script>
	import { _ } from '../../services/i18n';
</script>

<section id="top" class="hero">
	<div class="container inner">
		<img class="logo" src="images/ekmon.png" alt="Ekmon AB" width="250" height="120" />
		<p class="eyebrow">{$_('hero.eyebrow')}</p>
		<h1>{$_('hero.title')}</h1>
		<div class="actions">
			<a class="btn btn-primary" href="#projects">{$_('hero.ctaPrimary')}</a>
			<a class="btn btn-ghost" href="#contact">{$_('hero.ctaSecondary')}</a>
		</div>
	</div>
	<a class="scroll" href="#about" aria-label={$_('nav.about')}>
		<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 16.5 4.5 9l1.4-1.4L12 13.7l6.1-6.1L19.5 9z" fill="currentColor"/></svg>
	</a>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		min-height: 100svh;
		display: flex; align-items: center;
		padding: calc(var(--header-h) + 48px) 0 96px;
		color: #fff;
		background:
			linear-gradient(180deg, rgba(0,21,36,.55) 0%, rgba(0,21,36,.35) 40%, rgba(0,21,36,.8) 100%),
			url('../images/forest.jpg') center / cover no-repeat;
		background-color: var(--navy);
	}
	.inner { max-width: 880px; text-align: left; }
	.logo {
		width: 150px; height: auto; margin-bottom: 36px;
		background: #fff; padding: 14px 18px; border-radius: 2px;
	}
	.eyebrow { color: var(--cream); }
	h1 { font-size: clamp(34px, 5.4vw, 64px); max-width: 18ch; text-wrap: balance; }
	.actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 40px; }
	.scroll {
		position: absolute; left: 50%; bottom: 28px; transform: translateX(-50%);
		color: rgba(255,255,255,.8); padding: 8px;
		animation: bob 2.4s ease-in-out infinite;
	}
	.scroll:hover { color: #fff; }
	@keyframes bob { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 6px); } }
</style>
