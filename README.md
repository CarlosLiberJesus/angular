# angular
A aplicação que vamos estar a expôr

## Requirements

 - Angular19
 - Node: v18.20.5
 - npm: 10.8.2
 - yarn 1.22.22

## Documentation

Don't forget to check official documentation
https://preview.keenthemes.com/html/metronic/docs/

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/CarlosLiberJesus/angular.git
   ```
   - Note: You'll need your on artisan file
2. Navigate to the project directory:
   ```sh
   cd template
   ```
3. Install dependencies:
   ```sh
   yarn install  # eslint
   cd metronic/
   yarn install
   cd projects/lib-metronic/
   yarn install
   ```
4. Ensure you have the git credencial key

## Setting up in new project

1. Ensure you have the git credendial key
   ```sh
   registry=https ://npm.pkg.github.com --scope=@carlosliberjesus
   cat ~.npmrc
   ```
2. Install package:
   ```sh
   npm install @carlosliberjesus/lib-metronic
   ```
3. Set up angular.json
   ```json
   "assets": [
        {
        "glob": "**/*",
        "input": "public"
        },
        {
        "glob": "**/*",
        "input": "node_modules/@carlosliberjesus/lib-metronic/src/assets",
        "output": "assets/metronic"
        }
    ],
    "styles": [
        "src/styles.scss",
        "node_modules/@carlosliberjesus/lib-metronic/src/assets/sass/metronic.scss"
    ],
   ```
   #### Don't forget to use assets
   ```html
   <img src="/assets/metronic/media/logos/custom-1.png" alt="Custom Image" />
   ```
4. Set up Animations, [text](src/app/app.config.ts)
   ```ts
   export const appConfig: ApplicationConfig = {
     providers: [
      //...
      provideAnimations(),
   ```
5. Set up "colors" in index.html edit
   ```html
   <html lang="pt" data-bs-theme="light">
   ```

## Log History

- Dec 23, 2024 - First Setup, dev-tools & library structure
- Jan 22, 2025 - Metronic-Lib v0.1.0