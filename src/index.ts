import clia from 'command-line-args';
import commandLineArgs from "command-line-args";
const meta = require("../assets/meta.json")

// STARTING MESSAGE
const date = new Date();
console.log(`
██╗  ██╗██████╗ ███╗   ███╗
╚██╗██╔╝██╔══██╗████╗ ████║
 ╚███╔╝ ██████╔╝██╔████╔██║
 ██╔██╗ ██╔═══╝ ██║╚██╔╝██║
██╔╝ ██╗██║     ██║ ╚═╝ ██║
╚═╝  ╚═╝╚═╝     ╚═╝     ╚═╝

Version: ${meta.version} | OS: ${process.platform} | Time: ${date.getHours()}:${date.getMinutes()}
`)


/* first - parse the main command */
const mainDefinitions = [
    { name: 'command', defaultOption: true }
]
const mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })
const argv = mainOptions._unknown || []

/* second - parse the merge command options */
if (mainOptions.command === 'i' || mainOptions.command === 'install') {
    const installDefinitions = [
        { name: 'package', defaultOption: true },
        { name: 'dev', alias: 'd', type: Boolean }
    ]
    const installOptions = commandLineArgs(installDefinitions, { argv })

    console.log(installOptions);
} else {
    console.log("Sorry, the command you passed isn't supported by XPM yet!")
}
