import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const repositoryName = 'https://alina-adell.github.io/RickAndMorty-/'; // Замените на имя вашего репозитория

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'RickAndMorty-',
});