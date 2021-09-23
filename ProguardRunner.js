"use strict"

const { JavaCaller } = require("java-caller");

// Run asynchronously to use the returned status for process.exit
(async () => {
    try {
        await runExample();
    } catch (err) {
        console.error("Unexpected error: " + err.message + "\n" + err.stack);
        process.exitCode = 1;
    }
})();


async function runExample() {
    const java = new JavaCaller({
        //Users/nohsunghyun/WebstormProjects/node2proguard/
        classPath: 'proguard/lib/ProguardWrapper.jar',
        mainClass: 'imqa.proguard.ReTraceWrapper'
    });
    const { status, stdout, stderr } = await java.run(
        [
            '-verbose',
            '/Users/nohsunghyun/WebstormProjects/node2proguard/resources/map.txt',  //mapping file
            '/Users/nohsunghyun/WebstormProjects/node2proguard/resources/crash1',   //crash file
            ]

    );

    // console.log(`The status code returned by java command is ${status}`);
    if (stdout) {   //결과 출력
        console.log('stdout of the java command is :\n' + stdout);
    }
    // if (stderr) {    //error 출력
    //     console.log('stderr of the java command is :\n' + stderr);
    // }

    // console.log("Now we can get back on the rest of our custom module code :)")

}

