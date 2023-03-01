import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { 
              // copia os arquivos da pasta "src/assets/images" para a pasta "img" na pasta de saída
              src: 'src/assets/images/*',
              dest: 'images',
            },
          ],
        }),
      ],
    },
  },
});
