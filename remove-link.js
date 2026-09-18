const fs = require('fs');

const file = 'lib/work-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace the object containing the specific permalink
const newContent = content.replace(/\{[^}]*DUJqnTuCmHH[^}]*\},?\n?/g, '');

if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log("Successfully removed DUJqnTuCmHH");
} else {
    console.log("Could not find DUJqnTuCmHH");
}
