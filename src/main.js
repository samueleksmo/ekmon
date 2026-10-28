import App from './App.svelte';
import { setupI18n } from './services/i18n';

setupI18n();

const app = new App({ target: document.body });

export default app;
