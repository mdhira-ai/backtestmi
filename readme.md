###  To test this library

### install
```bash
npm i backtestmi
```

### copy and import
```javascript
import { Mybtn, useCount } from 'backtestmi'

```

## To Make Npm Package Follow This Steps
### Getting Started
```
This `README.md` provides clear instructions for setting up the project, installing dependencies, configuring Rollup, and testing and publishing the package.

Follow these steps to set up the project.

```
### Step 1: Initialize the Project

Run the following command to initialize the project:

```bash
npm init -y
```

### Step 2: Install Development Dependencies

Install the required development dependencies by running:

```bash
npm install --save-dev @babel/preset-react @rollup/plugin-babel @rollup/plugin-node-resolve @rollup/plugin-terser rollup
```

### Step 3: Install Dependencies

Install the necessary dependencies with:

```bash
npm install --save react react-dom
```

### Step 4: Update `package.json`

Add the following lines to your `package.json` file:

```json
"main": "dist/index.js",
"type": "module",
```

### Step 5: Create `rollup.config.js`

Create a file named `rollup.config.js` in the root directory and add the following code:

```javascript
import terser from "@rollup/plugin-terser";
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [terser(), babel({
    babelHelpers: 'bundled',
    extensions: ['.js', '.jsx'],
    presets: ['@babel/preset-react'],
  }),
  nodeResolve(
    {
      browser: true,
      extensions: ['.js', '.jsx']
    }
  )
  ]
};
```

### Step 6: Add `.npmignore`

Create a file named `.npmignore` in the root directory and add the following lines:

```
node_modules/
src/
test/
```

### Step 7: Add `.gitignore`

Create a file named `.gitignore` in the root directory and add the following lines:

```
node_modules/
dist/
```

### Step 8: Test the Package

To test the package, run the following commands:

```bash
npm link
```

To unlink, use:

```bash
npm unlink
```

### Step 9: Publish the Package

Finally, publish your package to npm by running:

```bash
npm publish
```


