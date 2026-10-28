<script>
	import { _ } from '../../services/i18n';

	const projects = [
		{ id: 'idehusen', name: 'Idéhusen Skandinavien', img: 'images/idehuset.jpg', alt: 'Architectural sketch of a house', url: 'https://www.idehusen.se/' },
		{ id: 'eksmobuss', name: 'Eksmo Buss', img: 'images/eksmobuss.jpg', alt: 'Coach bus on the road', url: 'https://eksmobuss.se/' },
		{ id: 'epishine', name: 'Epishine', img: 'images/epishine.jpg', alt: 'Printed organic solar cell', url: 'https://www.epishine.com/' },
		{ id: 'ligna', name: 'Ligna Energy', img: 'images/Ligna.jpg', alt: 'Green forest', url: 'https://lignaenergy.se/' }
	];
</script>

<section id="projects">
	<div class="container">
		<header>
			<p class="eyebrow">{$_('nav.projects')}</p>
			<h2>{$_('projects.heading')}</h2>
			<p class="intro">{$_('projects.intro')}</p>
		</header>

		<ul class="grid">
			{#each projects as p}
				<li class="card">
					<div class="media">
						<img src={p.img} alt={p.alt} loading="lazy" width="300" height="236" />
					</div>
					<div class="text">
						<p class="category">{$_('projects.items.' + p.id + '.category')}</p>
						<h3>{p.name}</h3>
						<p class="desc">{$_('projects.items.' + p.id + '.text')}</p>
						<a href={p.url} target="_blank" rel="noopener noreferrer">
							{$_('projects.visit')}<span class="sr"> – {p.name}</span>
							<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" fill="currentColor"/></svg>
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	section { background: var(--navy); color: var(--paper); padding: clamp(80px, 12vw, 140px) 0; }
	header { max-width: 640px; margin-bottom: 56px; }
	.eyebrow { color: var(--accent); }
	h2 { font-size: clamp(36px, 4.5vw, 52px); color: var(--cream); }
	.intro { margin: 16px 0 0; color: rgba(252,251,251,.7); }

	.grid { list-style: none; margin: 0; padding: 0; display: grid; gap: 24px; grid-template-columns: 1fr; }
	@media (min-width: 620px) { .grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1040px) { .grid { grid-template-columns: repeat(4, 1fr); } }
	.card {
		display: flex; flex-direction: column;
		background: var(--navy-2); border: 1px solid rgba(255,255,255,.08);
		transition: transform .25s, border-color .25s;
	}
	.card:hover { transform: translateY(-4px); border-color: rgba(255,236,209,.35); }
	.media { aspect-ratio: 16 / 9; overflow: hidden; background: #0f2b40; }
	.media img { width: 100%; height: 100%; object-fit: cover; }
	.text { display: flex; flex-direction: column; flex: 1; padding: 24px; }
	.category { margin: 0 0 8px; font: 700 12px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; color: var(--accent); }
	h3 { font-size: 26px; color: var(--cream); }
	.desc { margin: 12px 0 24px; font-size: 16px; line-height: 1.6; color: rgba(252,251,251,.75); flex: 1; }
	a {
		align-self: flex-start; display: inline-flex; align-items: center; gap: 6px;
		font: 700 13px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;
		color: var(--cream); text-decoration: none; padding-bottom: 5px; border-bottom: 1px solid currentColor;
	}
	a:hover { color: #fff; }
	.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
	@media (min-width: 620px) { .media { aspect-ratio: 4 / 3; } }
</style>
