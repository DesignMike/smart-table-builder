import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as Webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);

export default {
	entry: ['@babel/polyfill', './src/main.ts'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
				  MiniCssExtractPlugin.loader,
				  { loader: "css-loader", options: { url: false } },
				  "postcss-loader"
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
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new Webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new Webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.vue'],
		plugins: [
			// tsconf
			new TsconfigPathsPlugin(),
		],
	},
	devtool:
		process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, '../assets/js'),
		open: false,
		port: 8888,
		publicPath: path.resolve(__dirname, 'dist-dev'),
		writeToDisk: true,
		compress: true,
		hot: true,
		clientLogLevel: 'silent',
		noInfo: true,
	},
} as Webpack.Configuration;
