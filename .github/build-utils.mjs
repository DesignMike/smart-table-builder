#!/usr/bin/env zx

import { promises as fs } from 'fs';
import path from 'path';
const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');
// script dir
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// the dir at the top of the script dir
const rootDir = path.resolve(__dirname, '../../');
const initialDir = rootDir;
cd(rootDir);
(async () => {
    if ( !skipBuild ) {
        try {
            cd('wp-ultimate-tables/new-frontend'); // Change to the directory
            await $`npm run build`;
            console.log('Command completed successfully');
            cd(initialDir); // Change back to the initial directory
        } catch (error) {
            console.error('Command failed with status:', error.exitCode);
        }
    }
    const dir = 'wp-ultimate-tables/new-frontend/dist';
    const files = await fs.readdir(dir);
    const jsFile = files.find(file => path.extname(file) === '.js');

    if (jsFile) {
        await $`cp ${dir}/${jsFile} wp-ultimate-tables/assets/js/frontend.js`;
        console.log('File copied successfully');
    } else {
        console.log('FRONTEND: No .js file found in the directory');
    }
    if ( !skipBuild ) {
        // remove all the files in the directory
        await $`rm -rf wp-ultimate-tables/new-frontend/dist/*`;
    }
})();
(async () => {
    if ( !skipBuild ) {
        try {
            cd('wp-ultimate-tables/webpack-backend'); // Change to the directory
            await $`npm run build`;
            console.log('Command completed successfully');
            cd(initialDir); // Change back to the initial directory
        } catch (error) {
            console.error('Command failed with status:', error.exitCode);
        }
    }
})();