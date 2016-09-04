module.exports = function (grunt) {

    var webpack = require('webpack');
    var ManifestPlugin = require('webpack-manifest-plugin');

    grunt.initConfig({

        webpack: {

            prod: {

                entry: "./src/main.js",

                output: {
                    path: "./build/js/",
                    filename: "main.min.js",
                },

                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'stage-0'],
                        }
                    }]
                },

                plugins: [
                    new ManifestPlugin()
                ],

            }

        },

        watch: {
            webpack: {
                options: {
                    terminate: true
                },
                files: ['src/**/*.js'],
                tasks: ['webpack:prod']
            }
        }

    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');

};