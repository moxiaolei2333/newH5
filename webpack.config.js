var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config ={
	entry:{
			'index':'./src/page/index/index.js',
			'login':'./src/page/login/index.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'js/[name].js'
	},
	externals:{
		'jquery':'window.jQuery'
	},
	/*optimization:{
		splitChunks:{
			cacheGroups:{
				commons:{
					name:'base',
					chunks:'initial',
					minChunks:2,
					minSize:0
				}
			}
		}
	},*/

	module:{
		rules:[
			{
				test:/\.css/,
				//loader:"style-loader!css-loader",
				loader:ExtractTextPlugin.extract({
					fallback:'style-loder',
					use:"css-loader"
				})
			
			}
		]
	},
	

	plugins:{
		new ExtractTextPlugin("css/[naem].css");
	}
}
module.exports=config;