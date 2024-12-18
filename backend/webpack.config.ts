import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as Webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const WebpackShellPlugin = require('webpack-shell-plugin-next');
// import autoprefixer from 'autoprefixer';

function resolve(dir) {
	return path.join(__dirname, dir);
}

const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);

export default (env, argv) => {
	const isDevelopment = argv.mode === 'development';
	return [
		{
			entry: ['@babel/polyfill', './src/main.ts'],
			output: {
				path: path.resolve(__dirname, '../assets/js/backend/'),
				filename: 'admin.js',
				publicPath: '/',
			},
			module: {
				rules: [
					{
						test: /\.css$/,
						exclude: /node_modules/,
						use: [
							MiniCssExtractPlugin.loader,
							{ loader: 'css-loader', options: { url: false } },
							{
								loader: 'postcss-loader',
								options: {
									postcssOptions: {
										ident: 'postcss',
										plugins: [
											require('postcss-import'),
											//TailWindCSS(tailwindConfig),
											require('tailwindcss')(
												resolve('_config/tailwind.config.js'),
											),
											require('postcss-preset-env')({ stage: 1 }),
											require('postcss-prefix-selector')({
												prefix: '.wptable',
												exclude: ['.wrap.wptable', '.ui'],
											}),
										],
									},
								},
							},
						],
					},
					{
						test: /\.ts|js|mjs$/,
						exclude: /node_modules/,
						use: [
							{
								loader: 'babel-loader',
							},
						],
					},
					{
						test: /\.vue$/,
						use: [
							{
								loader: 'vue-loader',
								options: {
									compilerOptions: {
										isCustomElement: (tag) =>
											tag.includes('toolcool-color-picker'),
									},
								},
							},
						],
					},
					{
						test: /\.png|jpg|gif|jpeg|svg/,
						type: 'asset',
						parser: {
							dataUrlCondition: {
								maxSize: 10 * 1024,
							},
						},
						generator: {
							filename: 'images/[base]',
						},
					},
					// {
					// 	test: /\.txt|xlsx/,
					// 	type: 'asset',
					// 	generator: {
					// 		filename: 'files/[base]',
					// 	},
					// },
				],
			},
			plugins: [
				new MiniCssExtractPlugin(),
				isDevelopment ? new HtmlWebpackPlugin({
						template: 'src/index.html',
					})
				: null,
				new Webpack.HotModuleReplacementPlugin(),
				new CleanWebpackPlugin(),
				new VueLoaderPlugin(),
				new Webpack.ProvidePlugin({
					Vue: ['vue/dist/vue.esm.js', 'default'],
				}),
				new WebpackShellPlugin({
					// onDoneWatch: {
					// 	scripts: ['../.github/build-utils.mjs --skip-build'],
					// 	blocking: true,
					// 	parallel: false,
					// },
				}),
			].filter(Boolean),
			optimization: {
				splitChunks: false,
				runtimeChunk: false,
				minimize: !isDevelopment
			},
			resolve: {
				extensions: ['.ts', '.js', '.vue'],
				plugins: [
					// tsconf
					new TsconfigPathsPlugin(),
				],
				alias: {
					icons: path.resolve(
						__dirname,
						'node_modules/vue-material-design-icons',
					),
				},
			},
			devtool:
				isDevelopment
					? 'eval-source-map'
					: false,
		},
		{
			entry: ['./src/main.ts'],
			output: {
				path: path.resolve(__dirname, '../assets/js/backend/'),
				filename: 'admin.js',
				publicPath: '/',
			},
			module: {
				rules: [
					{
						test: /\.css$/,
						exclude: /node_modules/,
						use: [
							MiniCssExtractPlugin.loader,
							{ loader: 'css-loader', options: { url: false } },
							{
								loader: 'postcss-loader',
								options: {
									postcssOptions: {
										ident: 'postcss',
										plugins: [
											require('postcss-import'),
											//TailWindCSS(tailwindConfig),
											require('tailwindcss')(
												resolve('_config/tailwind.config.js'),
											),
											require('postcss-preset-env')({ stage: 1 }),
											require('postcss-prefix-selector')({
												prefix: '.wptable',
												exclude: ['.wrap.wptable', '.ui'],
											}),
										],
									},
								},
							},
						],
					},
					{
						test: /\.ts|js|mjs$/,
						exclude: /node_modules/,
						use: [
							{
								loader: 'babel-loader',
							},
						],
					},
					{
						test: /\.vue$/,
						use: [
							{
								loader: 'vue-loader',
								options: {
									compilerOptions: {
										isCustomElement: (tag) =>
											tag.includes('toolcool-color-picker'),
									},
								},
							},
						],
					},
					{
						test: /\.png|jpg|gif|jpeg|svg/,
						type: 'asset',
						parser: {
							dataUrlCondition: {
								maxSize: 10 * 1024,
							},
						},
						generator: {
							filename: 'images/[base]',
						},
					},
					// {
					// 	test: /\.txt|xlsx/,
					// 	type: 'asset',
					// 	generator: {
					// 		filename: 'files/[base]',
					// 	},
					// },
				],
			},
			plugins: [
				new MiniCssExtractPlugin(),
				isDevelopment ? new HtmlWebpackPlugin({
					template: 'src/index.html',
				}) : null,
				new Webpack.HotModuleReplacementPlugin(),
				new CleanWebpackPlugin(),
				new VueLoaderPlugin(),
				new Webpack.ProvidePlugin({
					Vue: ['vue/dist/vue.esm.js', 'default'],
				}),
				new WebpackShellPlugin({
					// onDoneWatch: {
					// 	scripts: ['../.github/build-utils.mjs --skip-build'],
					// 	blocking: true,
					// 	parallel: false,
					// },
				}),
			].filter(Boolean),
			resolve: {
				extensions: ['.ts', '.js', '.vue'],
				plugins: [
					// tsconf
					new TsconfigPathsPlugin(),
				],
				alias: {
					icons: path.resolve(
						__dirname,
						'node_modules/vue-material-design-icons',
					),
				},
			},
			devtool:
				isDevelopment
					? 'eval-source-map'
					: false,
		},
	];
};
