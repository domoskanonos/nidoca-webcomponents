import {TypescriptParser} from "typescript-Parser";
import fs from 'fs';
const typescriptParser = new TypescriptParser();
let sourceRoot = "./../core/source/";
const parsedIndexFile = typescriptParser.parseFile(sourceRoot.concat('index.ts'), 'workspace root');
parsedIndexFile.then((indexFileContent: any) => {
    indexFileContent["exports"].forEach((file: any) => {
        let filename: string = file.from.replace("./", "").concat(".ts");
        console.log("parse file: %s", filename);
        const parsedFile = typescriptParser.parseFile(sourceRoot.concat(filename), 'workspace root');
        parsedFile.then(value => {
            console.log(JSON.stringify(value));
            fs.writeFileSync("./../showcase/source/".concat(filename), JSON.stringify(value), {
                encoding: "utf8",
            });
        })
    });
})