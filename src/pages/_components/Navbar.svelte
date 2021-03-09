<script lang="ts">
	import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'sveltestrap';
	import { url, layout } from '@roxi/routify';
	import { whitelistedRoutes } from '$/routes';
	import { user as userStore } from '$/stores/user';

	$: user = $userStore;

	let isOpen = false;
</script>

<Navbar dark color="dark" expand="md" class="sticky-top">
	<NavbarBrand href="/">Navbar</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md">
		<Nav navbar class="ml-auto">
			{#each $layout.children as { path, title }}
				{#if user || whitelistedRoutes.some((route) => $url(path) == $url(route))}
					<NavItem>
						<NavLink href={$url(path)}>{title}</NavLink>
					</NavItem>
				{/if}
			{/each}
			{#if user}
				<NavItem>
					<NavLink disabled>Bonjour {user.firstname}!</NavLink>
				</NavItem>
			{/if}
		</Nav>
	</Collapse>
</Navbar>

<style>
	:global(.nav-link) {
		text-transform: capitalize;
	}
</style>
