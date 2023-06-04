const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(
    [
        'resources/assets/js/jquery.min.js',
        'resources/assets/bootstrap/js/bootstrap.min.js',
        'resources/assets/js/bs-init.js',
        'resources/assets/js/chart.min.js',
        'resources/assets/js/theme.js',
        'resources/js/customApp.js'
    ]
    , 'public/assets/js/app.js');

mix.styles(
    [
        'resources/assets/bootstrap/css/bootstrap.min.css',
        'resources/css/customCss.css'
    ], 'public/assets/css/app.css');

mix.copy('resources/assets/fonts', 'public/assets/fonts');
mix.copy('resources/assets/img', 'public/assets/img');

mix.version();