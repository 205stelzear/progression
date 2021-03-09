<script lang="ts">
	import Loader from '../_components/Loader.svelte';
	import { signin } from '$/stores/user';
	import { Button, Col, Form, FormGroup, Input, Label } from 'sveltestrap';

	let username: string | undefined = undefined;
	let password: string | undefined = undefined;

	let connectionPromise: Promise<unknown> | undefined = undefined;

	function handleSubmit(e: Event) {
		e.preventDefault();

		connectionPromise = executeLogin();
	}

	async function executeLogin() {
		await new Promise((resolve) => setTimeout(() => resolve(signin()), 1000));
		connectionPromise = undefined;
	}
</script>

<div class="d-flex flex-grow-1 flex-column text-center">
	<h1 class="h1 display-3 mt-5">Système de progression Scoute</h1>
	<div class="d-flex justify-content-center align-items-center my-5">
		<Col xs="10" md="8" lg="6">
			<Form on:submit={handleSubmit}>
				<h2 class="h1 display-3">Se connecter</h2>
				<FormGroup>
					<Label for="username">Nom d'utilisateur</Label>
					<Input
						bind:value={username}
						id="username"
						class="form-control"
						type="text"
						placeholder="Nom d'utilisateur..."
						spellcheck="false"
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="password">Mot de passe</Label>
					<Input
						bind:value={password}
						id="password"
						class="form-control"
						type="password"
						placeholder="Mot de passe..."
						name="current-password"
						autocomplete="current-password"
						spellcheck="false"
						autocorrect="off"
						autocapitalize="off"
						required
					/>
				</FormGroup>
				<Button color="primary" disabled={!!connectionPromise} block class="mt-5">
					<div class="d-flex justify-content-center align-items-center">
						<span>Connection</span>
						{#if connectionPromise}
							<Loader promise={connectionPromise} doHide small class="ml-3" />
						{/if}
					</div>
				</Button>
			</Form>
		</Col>
	</div>
</div>

<style>
	div :global(input:placeholder-shown) {
		font-style: italic;
	}

	div :global(.form-group) {
		text-align: left;
	}

	h1 {
		font-size: 38px;
	}

	h2 {
		font-size: 32px;
	}
</style>
