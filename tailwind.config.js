/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../../public/banner.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
     
    },
    fontFamily:{
      Opens:'Open Sans',
      encode:'Encode Sans Expanded',
      monsterrat:'Montserrat'
    }
  },
  plugins: [],
}

