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