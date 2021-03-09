// import HMR from '@roxi/routify/hmr';
import App from './App.svelte';

// const app = HMR(App, { target: document.body });

const app = new App({
	target: document.body,
});

export default app;
