var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '.',
    outputDirectory: '~/tmp',
    exe: 'myApp.exe',
    setupExe: 'MyAppSetup.exe'
});

resultPromise.then(function () {
    console.log("It worked!");
}, function (e) {
    console.log('No dice: ' + e.message);
});
