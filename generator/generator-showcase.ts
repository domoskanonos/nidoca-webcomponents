import {TypescriptParser} from 'typescript-Parser';
import fs from 'fs';
import Handlebars from 'handlebars';
import helpers from 'handlebars-helpers';

const handlebars = Handlebars.create();
helpers();
helpers('helper');
helpers(['helper']);
helpers({handlebars});
helpers('helper', {handlebars});
helpers(['helper'], {handlebars});


handlebars.registerHelper('empty', function (list: any = undefined) {
    return list === undefined || list == null || list.length == 0;
});

handlebars.registerHelper('toTag', function (value: any) {
    let retval: string = '';
    for (let i = 0; i < value.length; i++) {
        let c: string = value.charAt(i);
        let cToUpperCase: string = c.toUpperCase();
        if (retval.length == 0) {
            retval = c.toLowerCase();

        } else if (c == cToUpperCase) {
            retval = retval.concat('-').concat(c.toLowerCase());
        } else {
            retval = retval.concat(c);
        }
    }
    return retval;
});

async function createImports(files: any[]): Promise<any[]> {
    let imps: any[] = [];
    imps.push({
        libraryName: 'lit-element',
        specifiers: [{specifier: 'TemplateResult'}, {specifier: 'property'}, {specifier: 'customElement'}, {specifier: 'html'}, {specifier: 'LitElement'}],
    });
    let nidocaClazzNames: Set<String> = new Set();
    for (let i = 0; i < files.length; i++) {
        let file: any = files[i];
        let filename: string = file.from.replace('./', '').concat('.ts');
        const value: any = await typescriptParser.parseFile(sourceRoot.concat(filename), 'workspace root');
        let decs: any[] = value['declarations'];
        for (let j = 0; j < decs.length; j++) {
            let clazz: any = decs[j];
            let clazzName: string = clazz.name;
            nidocaClazzNames.add(clazzName);
        }

    }
    let nidocaImports: any = {
        libraryName: '@domoskanonos/nidoca-core',
        specifiers: [],
    };
    imps.push(nidocaImports);

    nidocaClazzNames.forEach(function (clazzName) {
        console.log(clazzName);
        nidocaImports.specifiers.push({specifier: clazzName});
    });
    return imps;
}

let typescriptParser = new TypescriptParser();
let sourceRoot = './../core/source/';
let parsedIndexFile = typescriptParser.parseFile(sourceRoot.concat('index.ts'), 'workspace root');

function createIndexPage(files: any[]) {
    let indexTSContent: string = '';
    indexTSContent = indexTSContent.concat('import \'').concat('./nidoca-showcase-app').concat('\';\n');
    indexTSContent = indexTSContent.concat('import \'').concat('./nidoca-showcase-dashboard-page').concat('\';\n');
    files.forEach((file: any) => {
        let filename: string = file.from.replace('./', '').concat('.ts');

        if (filename.indexOf('abstract') == -1 && filename.indexOf('template') == -1) {

            let destinationFilename: string = file.from.concat('-showcase-page.ts');
            indexTSContent = indexTSContent.concat('import \'').concat(destinationFilename).concat('\';\n');

        }
    })
    ;

    console.log(indexTSContent);
    fs.writeFileSync('./../showcase/source/index.ts', indexTSContent, {
        encoding: 'utf8',
    });
}

function createNidocaShowcaseTemplate(files: any[]) {
    let model: any = {pages: []};
    files.forEach((file: any) => {
        let filename: string = file.from.replace('./', '');
        if (filename.indexOf('abstract') == -1 && filename.indexOf('template') == -1) {
            model.pages.push(filename);
        }
    })
    ;
    let fileContent: string = fs.readFileSync('./nidoca-showcase-template.html', 'utf-8');
    let template = handlebars.compile(fileContent);
    let output: string = template(model);
    fs.writeFileSync('./../showcase/source/nidoca-showcase-template.ts', output, {
        encoding: 'utf8',
    });
}

function createNidocaShowcaseApp(files: any[]) {
    let model: any = {pages: []};
    files.forEach((file: any) => {
        let filename: string = file.from.replace('./', '');
        if (filename.indexOf('abstract') == -1 && filename.indexOf('template') == -1) {
            model.pages.push(filename);
        }
    })
    ;

    let fileContent: string = fs.readFileSync('./nidoca-showcase-app.html', 'utf-8');
    let template = handlebars.compile(fileContent);
    let output: string = template(model);

    fs.writeFileSync('./../showcase/source/nidoca-showcase-app.ts', output, {
        encoding: 'utf8',
    });
}

function createComponentPages(files: any[], imps: any[]) {
    files.forEach((file: any) => {
        let filename: string = file.from.replace('./', '').concat('.ts');

        if (filename.indexOf('abstract') == -1 && filename.indexOf('template') == -1) {

            let destinationFilename: string = file.from.concat('-showcase-page.ts');

            console.log('parse file: %s', filename);
            const parsedFile = typescriptParser.parseFile(sourceRoot.concat(filename), 'workspace root');

            parsedFile.then((value: any) => {


                    value['imports'] = imps;
                    let decs: any[] = value['declarations'];
                    decs.forEach((clazz: any) => {
                        let clazzName: string = clazz.name;
                        let isExported: boolean = clazz.isExported;
                        let accessors: any[] = clazz.accessors;
                        if (clazz.properties) {
                            for (let i = 0; i < clazz.properties.length; i++) {
                                let property: any = clazz.properties[i];
                                if(property.visibility == 0){
                                    property.private = true;
                                }
                                console.log(JSON.stringify(property));
                                let propertyType: string = property.type;
                                if (propertyType == undefined) {
                                    continue;
                                }
                                if (propertyType.indexOf('[]]') > -1) {
                                    property.defaultValue = '[[]]';
                                } else if (propertyType.indexOf('[]') > -1) {
                                    property.defaultValue = '[]';
                                } else if (propertyType.indexOf('string') > -1) {
                                    property.defaultValue = '\'\'';
                                } else if (propertyType.indexOf('boolean') > -1) {
                                    property.defaultValue = 'false';
                                } else if (propertyType.indexOf('number') > -1) {
                                    property.defaultValue = '0';
                                } else if (propertyType.indexOf('any') > -1) {
                                    property.defaultValue = '\'\'';
                                } else if (propertyType.indexOf('undefined') > -1) {
                                    property.defaultValue = 'undefined';
                                } else {
                                    property.defaultValue = 'Object.values('.concat(propertyType).concat(')[0];');
                                }

                                property.type = propertyType;
                            }
                        }
                    });


                    let fileContent: string = fs.readFileSync('./component.html', 'utf-8');
                    let template = handlebars.compile(fileContent);
                    let output: string = template(value);
                    fs.writeFileSync('./../showcase/source/'.concat(destinationFilename), output, {
                        encoding: 'utf8',
                    });
                },
            );
        }
    })
    ;

}

parsedIndexFile.then((parsedIndexFileContent: any) => {
    let files = parsedIndexFileContent['exports'];
    createImports(files).then(imps => {

        createIndexPage(files);
        createNidocaShowcaseTemplate(files);
        createNidocaShowcaseApp(files);
        createComponentPages(files, imps);

    });
});
