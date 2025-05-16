import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {}
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['light', 'dark', 'ps-account-1'] // Or your desired themes
        // Add other daisyUI configuration options here
    }
};
