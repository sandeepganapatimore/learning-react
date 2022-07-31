var path = require('path');
module.export = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assests"),
        filename: "bundle.js"
    }
},

module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    }
