const path = require('path');
const webpack = require('webpack');
const VENDOR_LIBS = [
	"bootstrap",
    "jquery",
    "react",
    "react-dom",
    "redux",
    "redux-thunk"
];
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServer = {
	port:4000,
	open:true,
	disableHostCheck : true,
	historyApiFallback :true,
	overlay:true,
	stats: 'minimal',
	inline: true,
	compress: true,
	contentBase: '/'
};


module.exports ={
	entry : {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},

	output : {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},

	module : {
		rules: [
			{
				use:'babel-loader',
				test: /\.js$/,
				exclude: '/node_modules/'
			},

			{
				use:[
					'style-loader',
					'css-loader'
				],
				test: /\.css$/
			},

			{
				loader: 'file-loader',
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
			},


		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$' : 'jquery',
			'jQuery': 'jquery',
			'window.$': 'jquery',
			'window.jQuery' : 'jquery'
		}),// cau hinh jquery

		new webpack.optimize.CommonsChunkPlugin({
			names:['vendor', 'manifest'],
		}),//tao ra file vendor va manifest de caching

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})//import index html vao dist
	],
	devServer
}
//chunkhash check cache bundle vendor
