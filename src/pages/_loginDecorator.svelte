<script>
	import { ready, node } from '@roxi/routify';
	import Login from './_components/Login.svelte';
	import { whitelistedRoutes } from '$/routes';
	import { user } from '$/stores/user';

	$: isWhitelisted = whitelistedRoutes.some((route) => $node.path.startsWith(route));

	setTimeout($ready, 0);
</script>

{#if isWhitelisted || $user}
	<slot />
{:else}
	<Login />
{/if}
