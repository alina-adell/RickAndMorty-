// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const repositoryName = 'RickAndMorty-'; // Убедитесь, что имя совпадает

export default defineConfig({
  plugins: [react()],
  base: `/RickAndMorty-/`,
});