const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/components');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Pattern to capture opening tag name, attributes, and closing bracket >
    const regex = /(<[a-zA-Z0-9_.]+\s+)([^>]*?className=['"{`][\s\S]*?)(>)/g;

    content = content.replace(regex, (match, tagStart, attributes, tagEnd) => {
        // Do not add multiple style tags.
        if (attributes.includes('style={')) {
            return match;
        }

        if (attributes.includes('font-barlow-condensed')) {
            changed = true;
            return `${tagStart}style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} ${attributes}${tagEnd}`;
        }
        else if (/\bfont-barlow\b/.test(attributes)) {
            changed = true;
            return `${tagStart}style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} ${attributes}${tagEnd}`;
        }
        else if (attributes.includes('font-inter')) {
            changed = true;
            return `${tagStart}style={{ fontFamily: '"Inter", sans-serif' }} ${attributes}${tagEnd}`;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkFiles(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}

walkFiles(srcDir);
