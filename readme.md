# WP Cache Busting

A workflow/setup for doing real static asset revisioning by appending content hash to filenames: `main.css` → `main-d41d8cd98f.css`.

## Features
+ Using [gulp-rev](https://github.com/sindresorhus/gulp-rev) for creating `manifest.json`
+ Conditional Development/production 
+ Works in Bedrock setups using `WP_ENV` from the `.env` file

## Walkthrough

1. During development, run `npm start`. Browsersync will start and watch files. This example project is using Sass, Autoprefixer, Browsersync, Rollup (Babelrc file, ES2015, stage-0 presets) and more.
2. Run `npm run build` for creating new hashed filenames and creating the manifest file. The manifest file looks like this:
```json
{
  "css/main.css": "css/main-18a6b5b5e0.css",
  "js/app.js": "js/app-4b2406238d.js"
}
```
3. In `functions.php` the `asset_path()` function will match the regular file names with the hashed filenames.
4. In `functions.php` the `theme_load_theme_assets()` function will check if the environment is `development` or `production` wich prevents hashed filenames from being enqueued in the theme during development.
+ If development: Use regular build files from the gulp tasks ex main.css
+ If production: Use fresh hashed filenames ex `main-d41d8cd98f.css`

## Try it out

Install
```bash
cd example-theme
npm i
npm
```
Edit css and js in `example-theme/assets/rev`

Create a build
```bash
npm run build
```

In `example-theme/assets/rev` you will find the hashed files.

## Important note: This example theme doesn't have anything more than the functions file (besides the gulp and assets folders). You can incorporate this into your own theme with the rest of the needed template files.

