#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { dir } = require("console");
let fs = require("fs");
let path = require("path");
let helpObj =require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
let types = {
    media: ["mp4","mkv"],
    archives: ['zip','7z','rar','tar','ar','iso',"xz"],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app: ['exe','dmg','pkg',"deb"]
}
// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node main.js help
let command = inputArr[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please input right command");
        break;
}
