<script lang="ts">
	import { Input, Form, FormGroup, Label, Col, Popover } from 'sveltestrap';

	export let name: string = 'Banana';

	const items = [
		{ name: 'Item 1', done: false, count: 0 },
		{ name: 'Item 2', done: false, count: 0 },
		{ name: 'Item 3', done: false, count: 0 },
	];

	// console.log(import.meta.env);
</script>

<!-- routify:options title="Accueil" -->

<div class="d-flex flex-column align-items-center">
	<p>Hello {name}!</p>

	<Form class="w-100">
		<FormGroup row>
			<Label for="test-input" sm="4" class="col-form-label">This is a label</Label>
			<Col sm="8" class="d-flex align-items-center">
				<Input id="test-input" type="text" bind:value={name} />
			</Col>
		</FormGroup>
	</Form>

	<div class="my-5">
		<span id="test-id">Hello World</span>
		<Popover target="test-id">Test</Popover>
	</div>

	<p class="d-flex flex-column">
		{#each items as { count }, index}
			<span>Count {index + 1} : {count}</span>
		{/each}
	</p>
</div>
