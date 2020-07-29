"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_args_1 = __importDefault(require("command-line-args"));
var meta = require("../assets/meta.json");
// STARTING MESSAGE
var date = new Date();
console.log("\n\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\n\u255A\u2588\u2588\u2557\u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\n \u255A\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\n \u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\n\u2588\u2588\u2554\u255D \u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\n\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D     \u255A\u2550\u255D\n\nVersion: " + meta.version + " | OS: " + process.platform + " | Time: " + date.getHours() + ":" + date.getMinutes() + "\n");
/* first - parse the main command */
var mainDefinitions = [
    { name: 'command', defaultOption: true }
];
var mainOptions = command_line_args_1.default(mainDefinitions, { stopAtFirstUnknown: true });
var argv = mainOptions._unknown || [];
/* second - parse the merge command options */
if (mainOptions.command === 'i' || mainOptions.command === 'install') {
    var installDefinitions = [
        { name: 'package', defaultOption: true },
        { name: 'dev', alias: 'd', type: Boolean }
    ];
    var installOptions = command_line_args_1.default(installDefinitions, { argv: argv });
    console.log(installOptions);
}
else {
    console.log("Sorry, the command you passed isn't supported by XPM yet!");
}
