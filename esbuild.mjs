import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['src/nidoca-webcomponents.ts', 'src/app/index.ts'],
    bundle: true,
    minify: true,
    outdir: 'public',
    logLevel: 'debug',
    loader: {
        '.ts': 'ts',
        '.html': 'text'
    },
    sourceRoot: 'src',
})