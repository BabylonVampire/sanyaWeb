import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		commonjsOptions: {
			exclude: ['src/db/api/*.tsx', 'src/db/tables/*.json'],
		},
	},
});
