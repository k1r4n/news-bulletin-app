module.exports = {
	devtool: 'source-map',
	  	entry:  __dirname + "/app/main.js",
	  	output: {
		    	path: __dirname + "/public",
		    	filename: "bundle.js"
	  	},
			resolve: {
        	extensions: ['.js', '.jsx']
    	},
	  	module: {
		    	loaders: [
		      		{
				        	test: /\.json$/,
				        	loader: "json-loader"
		      		},
					    {
					        test: /\.(js|jsx)$/,
					        exclude: /node_modules/,
					        loader: 'babel-loader'
					    },
			      	{
					        test: /\.css$/,
					        loader: 'style-loader!css-loader?modules'
			        }
		    	]
	  	},
	  	devServer: {
		    	contentBase: "./public",
					historyApiFallback: true,
					inline: true
			}
}
