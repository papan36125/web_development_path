const HtmlWebPackPlugin = require("html-webpack-plugin");
let html_plugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
        //   loader: "babel-loader"
        // }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
        //   {
        //     loader: "html-loader"
        //   }
        // ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    html_plugin
  ]
};
