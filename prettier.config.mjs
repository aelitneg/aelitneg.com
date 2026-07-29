/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-astro', '@prettier/plugin-xml'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svg',
      options: { parser: 'xml' },
    },
  ],
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};

export default config;
