#!/usr/bin/env zx

import { promises as fs } from 'fs';
import path from 'path';

const initialDir = process.cwd(); // Save the initial directory

(async () => {
    try {
        cd('wp-ultimate-tables/new-frontend'); // Change to the directory
        await $`npm run build`;
        console.log('Command completed successfully');
        cd(initialDir); // Change back to the initial directory
    } catch (error) {
        console.error('Command failed with status:', error.exitCode);
    }
    const dir = 'wp-ultimate-tables/new-frontend/dist';
    const files = await fs.readdir(dir);
    const jsFile = files.find(file => path.extname(file) === '.js');

    if (jsFile) {
        await $`cp ${dir}/${jsFile} wp-ultimate-tables/assets/js/frontend.js`;
        console.log('File copied successfully');
    } else {
        console.log('No .js file found in the directory');
    }
    // remove all the files in the directory
    await $`rm -rf wp-ultimate-tables/new-frontend/dist/*`;
})();
(async () => {
    try {
        cd('wp-ultimate-tables/webpack-backend'); // Change to the directory
        await $`npm run build`;
        console.log('Command completed successfully');
        cd(initialDir); // Change back to the initial directory
    } catch (error) {
        console.error('Command failed with status:', error.exitCode);
    }
    const dir = initialDir + '/wp-ultimate-tables/webpack-backend/dist';
    // const files = await fs.readdir(dir);
    const jsFile = 'main.js';

    if (jsFile) {
        await $`cp ${dir}/${jsFile} ${initialDir}/wp-ultimate-tables/assets/js/admin.js`;
        console.log('File copied successfully');
    } else {
        console.log('No .js file found in the directory');
    }
    // remove all the files in the directory
    await $`rm -rf wp-ultimate-tables/webpack-backend/dist/*`;
})();