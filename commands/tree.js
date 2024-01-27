let fs = require("fs");
let path = require("path");
function treeFn(dirPath){
    // console.log("Tree command implemented for ",dirPath);
    if(dirPath==undefined)
    {
        treeHelper(process.cwd(),"");
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist) {
           treeHelper(dirPath, "")
        } else {
            console.log("kindly enter the correct path");
            return;
        }
    }
}
function treeHelper(dirPath,indent)
{
   
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
       let fileName = path.basename(dirPath);
       console.log(indent + "Ͱ"+ fileName );
    } else {
            let dirName = path.basename(dirPath);
            console.log(indent + "L" + dirName);
            let childrens = fs.readdirSync(dirPath);
            for(let i=0;i<childrens.length;i++)
            {
              let childPath =  path.join(dirPath,childrens[i]);
                treeHelper(childPath,indent +  "\t");
            }
    }
}
module.exports = {
    treeKey : treeFn
}
