#!/usr/bin/env zx

import { promises as fs } from 'fs';
import path from 'path';

(async () => {
    const dir = 'wp-ultimate-tables/new-frontend/dist';
    const files = await fs.readdir(dir);
    const jsFile = files.find(file => path.extname(file) === '.js');

    if (jsFile) {
        await $`cp ${dir}/${jsFile} wp-ultimate-tables/assets/js/frontend.js`;
        console.log('File copied successfully');
    } else {
        console.log('No .js file found in the directory');
    }
})();