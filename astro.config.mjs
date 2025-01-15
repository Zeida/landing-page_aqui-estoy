import { defineConfig } from 'astro/config';

/* For gh pages
export default defineConfig({
  site: 'https://zeida.github.io/landing-page_aqui-estoy', 
  base: '/landing-page_aqui-estoy/',
  output: 'static'
});
*/

export default defineConfig({
  site: 'https://aqui-estoy.netlify.app', 
  base: '/',
  output: 'static'
});
