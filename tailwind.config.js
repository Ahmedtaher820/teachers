/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    corePlugins: {
      container: false
    },
    theme: {
        extend: {},
        screens: {
            'sm': '320px',
            // => @media (min-width: 640px) { ... }
            'sl': '600px',
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
        container: {
          center:true,
          padding: {
            // 'sm': "1rem",
            // 'md': "2rem",
            // 'lg': "3rem",
            // 'xl': "4rem",
  
            // '2xl': "6.75rem",
          },
    },
  },
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            '@screen sm': {
              maxWidth: '360px',
            },
            '@screen sl': {
              maxWidth: '480px',
            },
            '@screen md': {
              maxWidth: '700px',
            },
            '@screen lg': {
              maxWidth: '820px',
            },
            '@screen xl': {
              maxWidth: '1223px',
            },
          }
        })
      }
    ]
  }