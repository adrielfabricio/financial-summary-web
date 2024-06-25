/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"

import colors from "tailwindcss/colors"

const { nextui } = require("@nextui-org/react")

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  plugins: [
    require("tailwindcss-animate"),
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/forms"),
    nextui({
      themes: {
        dark: {
          layout: {
            borderWidth: {
              default: "1px",
              large: "1px",
              medium: "1px",
              small: "1px",
            },
            dividerWeight: "1px",
            radius: {
              default: "0.75rem",
              large: "0.75rem",
              medium: "0.75rem",
              small: "0.75rem",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#F96A2E",
            },
          },
          layout: {
            borderWidth: {
              default: "1px",
              large: "1px",
              medium: "1px",
              small: "1px",
            },
            dividerWeight: "1px",
            radius: {
              default: "0.75rem",
              large: "0.75rem",
              medium: "0.75rem",
              small: "0.75rem",
            },
          },
        },
      },
    }),
  ],

  prefix: "",
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    current: "currentColor",
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blur-in": "blur-in 0.3s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
        "tremor-small": "0.375rem",
      },
      boxShadow: {
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },

      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: {
          accent: "#F7F7F8",
          DEFAULT: "hsl(var(--background))",
        },
        border: "hsl(var(--border))",
        brand: {
          DEFAULT: "#F96A2E",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // dark mode
        "dark-tremor": {
          background: {
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
            muted: "#131A2B",
            subtle: colors.gray[800],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          brand: {
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            faint: "#0B1229",
            inverted: colors.blue[950],
            muted: colors.blue[950],
            subtle: colors.blue[800],
          },
          content: {
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            inverted: colors.gray[950],
            strong: colors.gray[50],
            subtle: colors.gray[600],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // light mode
        tremor: {
          background: {
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
            muted: colors.gray[50],
            subtle: colors.gray[100],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          brand: {
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            faint: colors.blue[50],
            inverted: colors.white,
            muted: colors.blue[200],
            subtle: colors.blue[400],
          },
          content: {
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            inverted: colors.white,
            strong: colors.gray[900],
            subtle: colors.gray[400],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
        },
      },
      fontSize: {
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blur-in": {
          from: {
            filter: "blur(6px)",
            opacity: "0.2",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
    transparent: "transparent",
  },
} satisfies Config

export default config
