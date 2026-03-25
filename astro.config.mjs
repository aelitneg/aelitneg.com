// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/AtkinsonHyperlegibleNext-Regular.woff2'],
            weight: 400,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-RegularItalic.woff2',
            ],
            weight: 400,
            style: 'italic',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-ExtraLight.woff2',
            ],
            weight: 200,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-ExtraLightItalic.woff2',
            ],
            weight: 200,
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/AtkinsonHyperlegibleNext-Light.woff2'],
            weight: 300,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-LightItalic.woff2',
            ],
            weight: 300,
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/AtkinsonHyperlegibleNext-Medium.woff2'],
            weight: 500,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-MediumItalic.woff2',
            ],
            weight: 500,
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/AtkinsonHyperlegibleNext-SemiBold.woff2'],
            weight: 600,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-SemiBoldItalic.woff2',
            ],
            weight: 600,
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/AtkinsonHyperlegibleNext-Bold.woff2'],
            weight: 700,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-BoldItalic.woff2',
            ],
            weight: 700,
            style: 'italic',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-ExtraBold.woff2',
            ],
            weight: 800,
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/AtkinsonHyperlegibleNext-ExtraBoldItalic.woff2',
            ],
            weight: 800,
            style: 'italic',
          },
        ],
      },
    },
  ],
});
