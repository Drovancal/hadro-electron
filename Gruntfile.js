require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    electron: {
        windowBuild: {
            options: {
                name: 'HadroElectron',
                dir: 'app',
                out: 'dist',
                version: '0.34.2',
                platform: 'win32',
                arch: 'x64'
            }
        }
        // osxBuild: {
        //     options: {
        //         name: 'HadroElectron',
        //         dir: 'app',
        //         out: 'dist',
        //         version: '0.34.2',
        //         platform: 'win32',
        //         arch: 'x64'
        //     }
        // }
    }
});

grunt.registerTask('default', ['electron']);
