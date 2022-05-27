module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {       
"primary": "#92B4EC",       
"secondary": "#D926A9",   
"accent": "#1FB2A6",       
"neutral": "#191D24",    
"base-100": "#ffffff",      
"info": "#3ABFF8",
"success": "#36D399",
"warning": "#FBBD23",
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
