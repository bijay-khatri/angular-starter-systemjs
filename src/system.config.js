(function(global) {
    SystemJS.config({
        baseURL: "/",
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'src',
            angular: "npm:angular/angular.min.js"
        },
        packages: {
            app: {
                main: "main.js",
                defaultExtension: 'js'
            }
        }
    })
})(this);