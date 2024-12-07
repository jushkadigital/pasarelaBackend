import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';

export default defineConfig({
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../../../static/js'),
    // emptyOutDir: true,
    lib:{
      entry: resolve(__dirname, "src/library.ts"),
      name: "componentsLibrary",
      fileName: (format)=>`components-library.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
    },
  },
  
  cssCodeSplit: true,
}
});
