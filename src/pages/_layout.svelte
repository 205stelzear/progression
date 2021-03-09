<script lang="ts">
	import Navbar from './_components/Navbar.svelte';
	import Footer from './_components/Footer.svelte';
	import { Container } from 'sveltestrap';
	import { metatags, page, isActive } from '@roxi/routify';
	import { capitalize } from '$/utils';

	import decorator from './_loginDecorator.svelte';

	metatags.template('title', (title: string) => `${title ? `${title} - ` : ''}Progression Scoute`);
	$: metatags.title = capitalize($page.title);
</script>

<Navbar />

<Container>
	<slot {decorator} />
</Container>

<Footer />
