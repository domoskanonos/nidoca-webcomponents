import { TypescriptParser } from 'typescript-Parser';
import fs from 'fs';
import Handlebars = require('handlebars');

let handlebarsHelpers = require('handlebars-helpers')({
  handlebars: Handlebars,
});
console.log('handlebarsHelpers registered');


Handlebars.registerHelper('empty', function (list: any = undefined) {
  return list === undefined || list == null || list.length == 0;
});

Handlebars.registerHelper('toTag', function (value: any) {
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


let typescriptParser = new TypescriptParser();
let sourceRoot = './../core/source/';
let parsedIndexFile = typescriptParser.parseFile(sourceRoot.concat('index.ts'), 'workspace root');


parsedIndexFile.then((indexFileContent: any) => {

  let indexTSContent: string = '';

  indexFileContent['exports'].forEach((file: any) => {
    let filename: string = file.from.replace('./', '').concat('.ts');


    if (filename.indexOf('Abstract') == -1) {

      let destinationFilename: string = file.from.concat('-showcase-page.ts');
      indexTSContent = indexTSContent.concat('import \'').concat(destinationFilename).concat('\';\n');

      console.log('parse file: %s', filename);
      const parsedFile = typescriptParser.parseFile(sourceRoot.concat(filename), 'workspace root');

      parsedFile.then((value: any) => {

        let imps: any[] = value['imports'];
        let dec: any[] = value['declarations'];
        dec.forEach((clazz: any) => {
          let clazzName: string = clazz.name;
          let isExported: boolean = clazz.isExported;
          let accessors: any[] = clazz.accessors;
          imps.push({ libraryName: 'nidoca', specifiers: [{ specifier: clazzName }] });
        });

        let fileContent: string = fs.readFileSync('./component.html', 'utf-8');
        let template = Handlebars.compile(fileContent);
        let output: string = template(value);
        fs.writeFileSync('./../showcase/source/'.concat(destinationFilename), output, {
          encoding: 'utf8',
        });
      });
    }
  });

  console.log(indexTSContent);
  fs.writeFileSync('./../showcase/source/index.ts', indexTSContent, {
    encoding: 'utf8',
  });


});
