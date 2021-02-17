import { TypescriptParser } from "typescript-Parser";
import fs from 'fs';
import Handlebars = require('handlebars');


Handlebars.registerHelper('empty', function (list: any = undefined) {
    return list === undefined || list == null || list.length == 0;
});

Handlebars.registerHelper('toTag', function (value) {
    let retval: string = '';
    for (let i = 0; i < value.length; i++) {
        let c: string = value.charAt(i);
        let cToUpperCase: string = c.toUpperCase();
        if (retval.length == 0) {
            retval = c.toLowerCase();

        } else if (c == cToUpperCase) {
            retval = retval.concat('-').concat(c.toLowerCase());
        }
        else {
            retval = retval.concat(c);
        }
    }
    return retval;
});


const typescriptParser = new TypescriptParser();
let sourceRoot = "./../core/source/";
const parsedIndexFile = typescriptParser.parseFile(sourceRoot.concat('index.ts'), 'workspace root');
parsedIndexFile.then((indexFileContent: any) => {

    indexFileContent["exports"].forEach((file: any) => {
        let filename: string = file.from.replace("./", "").concat(".ts");


        if (filename.indexOf('Abstract') == -1) {


            console.log("parse file: %s", filename);
            const parsedFile = typescriptParser.parseFile(sourceRoot.concat(filename), 'workspace root');

            parsedFile.then((value: any) => {


                console.log(JSON.stringify(value));

                let fileContent: string = fs.readFileSync("./component.html", "utf-8");
                let template = Handlebars.compile(fileContent);
                let output: string = template(value);

                let imps: any[] = value["imports"];
                imps.forEach((imp: any) => {
                    let libraryName: string = imp.libraryName;
                    let specifiers: any[] = imp.specifiers;
                    specifiers.forEach((specifier: any) => {
                        let spec: string = specifier.specifier;
                    });
                });
                let exp: any[] = value["exports"];
                let res: any[] = value["resources"];
                let usage: any = value["usages"];
                let dec: any[] = value["declarations"]; //clazzes
                dec.forEach((clazz: any) => {
                    let clazzName: string = clazz.name;
                    let isExported: boolean = clazz.isExported;
                    let accessors: any[] = clazz.accessors;
                    let methods: any[] = clazz.methods;
                    if (methods) {
                        methods.forEach((method: any) => {
                            let name: string = method.name;
                            let type: string = method.type;
                            let isOptional: boolean = method.isOptional;
                            let isStatic: boolean = method.isStatic;
                            let isAbstract: boolean = method.isAbstract;
                            let isAsync: boolean = method.isAsync;
                        });
                    }
                    let properties: any[] = clazz.properties;
                    if (properties) {
                        properties.forEach((propertie: any) => {
                            let name: string = propertie.name;
                            let type: string = propertie.type;
                            let isOptional: boolean = propertie.isOptional;
                            let isStatic: boolean = propertie.isStatic;
                        });
                    }
                });

                fs.writeFileSync("./../showcase/source/".concat(file.from).concat('-showcase-page.ts'), output, {
                    encoding: "utf8",
                });
            });
        }
    });
})