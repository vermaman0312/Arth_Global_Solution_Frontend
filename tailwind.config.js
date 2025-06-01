/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
  			background: {
          primary: 'hsl(var(--background-primary))',
          secondary: 'hsl(var(--background-secondary))',
          danger: 'hsl(var(--background-danger))',
        },
        foreground: {
          primary: 'hsl(var(--foreground-primary))',
          secondary: 'hsl(var(--foreground-secondary))',
          danger: 'hsl(var(--foreground-danger))',
        },
        button: {
          background: {
            primary: 'hsl(var(--button-background-primary))',
            secondary: 'hsl(var(--button-background-secondary))',
            warning: 'hsl(var(--button-background-warning))',
            danger: 'hsl(var(--button-background-danger))',
          },
          foreground: 'hsl(var(--button-foreground))',
        },
        input: {
          placeholder: {
            foreground: {
              primary: 'hsl(var(--input-placeholder-foreground-primary))',
              secondary: 'hsl(var(--input-placeholder-foreground-secondary))',
              danger: 'hsl(var(--input-placeholder-foreground-danger))'
            },
          },
          background: {
            primary: 'hsl(var(--input-background-primary))',
            secondary: 'hsl(var(--input-background-secondary))',
            danger: 'hsl(var(--input-background-danger))'
          },
          border: {
            primary: 'hsl(var(--input-border-primary))',
            secondary: 'hsl(var(--input-border-secondary))',
            danger: 'hsl(var(--input-border-danger))'
          },
          foreground: {
            primary: 'hsl(var(--input-foreground-primary))',
            secondary: 'hsl(var(--input-foreground-secondary))',
            danger: 'hsl(var(--input-foreground-danger))'
          },
        },
        alertbox: {
          header: {
            background: {
              primary: 'hsl(var(--alertbox-header-background-primary))',
              secondary: 'hsl(var(--alertbox-header-background-secondary))',
              danger: 'hsl(var(--alertbox-header-background-danger))'
            },
            foreground: {
              primary: 'hsl(var(--alertbox-header-foreground-primary))',
              secondary: 'hsl(var(--alertbox-header-foreground-secondary))',
              danger: 'hsl(var(--alertbox-header-foreground-danger))'
            }
          },
          background: {
            primary: 'hsl(var(--alertbox-background-primary))',
            secondary: 'hsl(var(--alertbox-background-secondary))',
            danger: 'hsl(var(--alertbox-background-danger))'
          },
          foreground: {
            primary: 'hsl(var(--alertbox-foreground-primary))',
            secondary: 'hsl(var(--alertbox-foreground-secondary))',
            danger: 'hsl(var(--alertbox-foreground-danger))'
          },
          border: {
            primary: 'hsl(var(--alertbox-border-primary))',
            secondary: 'hsl(var(--alertbox-border-secondary))',
            danger: 'hsl(var(--alertbox-border-danger))'
          },
        },
        card: {
          header: {
            background: {
              primary: 'hsl(var(--card-header-background-primary))',
              secondary: 'hsl(var(--card-header-background-secondary))',
              danger: 'hsl(var(--card-header-background-danger))'
            },
            foreground: {
              primary: 'hsl(var(--card-header-foreground-primary))',
              secondary: 'hsl(var(--card-header-foreground-secondary))',
              danger: 'hsl(var(--card-header-foreground-danger))'
            },
          },
          background: {
            primary: 'hsl(var(--card-background-primary))',
            secondary: 'hsl(var(--card-background-secondary))',
            danger: 'hsl(var(--card-background-danger))'
          },
          foreground: {
            primary: 'hsl(var(--card-foreground-primary))',
            secondary: 'hsl(var(--card-foreground-secondary))',
            danger: 'hsl(var(--card-foreground-danger))'
          },
        },
        sidebar: {
          background: {
            primary: 'hsl(var(--sidebar-background-primary))',
            secondary: 'hsl(var(--sidebar-background-secondary))',
            danger: 'hsl(var(--sidebar-background-danger))'
          },
          foreground: {
            primary: 'hsl(var(--sidebar-foreground-primary))',
            secondary: 'hsl(var(--sidebar-foreground-secondary))',
            danger: 'hsl(var(--sidebar-foreground-danger))'
          },
          option: {
            active: {
              background: {
                primary: 'hsl(var(--sidebar-option-active-background-primary))',
                secondary: 'hsl(var(--sidebar-option-active-background-secondary))',
                danger: 'hsl(var(--sidebar-option-active-background-danger))'
              },
              foreground: {
                primary: 'hsl(var(--sidebar-option-active-foreground-primary))',
                secondary: 'hsl(var(--sidebar-option-active-foreground-secondary))',
                danger: 'hsl(var(--sidebar-option-active-foreground-danger))'
              },
            },
            hover: {
              background: {
                primary: 'hsl(var(--sidebar-option-hover-background-primary))',
                secondary: 'hsl(var(--sidebar-option-hover-background-secondary))',
                danger: 'hsl(var(--sidebar-option-hover-background-danger))'
              },
              foreground: {
                primary: 'hsl(var(--sidebar-option-hover-foreground-primary))',
                secondary: 'hsl(var(--sidebar-option-hover-foreground-secondary))',
                danger: 'hsl(var(--sidebar-option-hover-foreground-danger))'
              },
            }
          },
        },
        navbar: {
          background:{
            primary: 'hsl(var(--navbar-background-primary))',
            secondary: 'hsl(var(--navbar-background-secondary))',
            danger: 'hsl(var(--navbar-background-danger))'
          },
          foreground:{
            primary: 'hsl(var(--navbar-foreground-primary))',
            secondary: 'hsl(var(--navbar-foreground-secondary))',
            danger: 'hsl(var(--navbar-foreground-danger))'
          },
        }
  		},
      boxShadow: {
        'right': '4px 0 8px -4px rgba(0, 0, 0, 0.3)',
        'left': '-4px 0 8px -4px rgba(0, 0, 0, 0.3)',
        'top': '0 -4px 8px -4px rgba(0, 0, 0, 0.3)',
        'bottom': '0 4px 8px -4px rgba(0, 0, 0, 0.3)',
        'full': '0 0 10px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
