# UFV 11ty Starter

This is a starter template for 11ty projects at UFV, featuring Bootstrap integration, Sass processing, and live reloading for local development.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Getting Started

Follow these steps to get your development environment set up:

1. Clone the repository
   ```
   git clone https://github.com/your-username/ufv-11ty-starter.git
   cd ufv-11ty-starter
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```
   This will start the 11ty server and watch for changes in your Sass files. The browser will automatically reload when you make changes.

4. View your site
   Open your browser and navigate to `http://localhost:8080` (or the port shown in your console).

## Building for Production

To build your site for production, run:
```
npm run build
```
This will compile your Sass files, minify your CSS, and build your 11ty site. The output will be in the `dist` directory.

## Project Structure

- `src/`: Source files
  - `_includes/`: Layout templates
  - `css/`: Sass files
- `dist/`: Output directory (generated when building)
- `.eleventy.js`: Eleventy configuration
- `package.json`: Project dependencies and scripts
- `.sassrc`: Sass configuration

## Customizing

- Modify `src/_includes/base.njk` to change the base HTML structure
- Edit `src/index.njk` to update the home page content
- Add your custom styles to `src/css/styles.scss`

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Licensing

The code in this project is licensed under MIT license. (You may want to check and update this according to your project's license)