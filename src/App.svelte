<script>
	import Nav from './components/home/Nav.svelte';
	import Home from './components/home/Home.svelte';
	import About from './components/about/About.svelte';
	import ClientWork from './components/clientwork/ClientWork.svelte';
	import Footer from './components/footer/Footer.svelte';
</script>

<a class="skip-link" href="#main">Skip to content</a>
<Nav />
<main id="main">
	<Home />
	<About />
	<ClientWork />
</main>
<Footer />
