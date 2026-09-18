const fs = require('fs');

const file = 'lib/work-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Use a simple regex to find all permalinks
const matches = [...content.matchAll(/permalink:\s*"([^"]+)"/g)];
const links = matches.map(m => m[1]);

const counts = {};
links.forEach(l => { counts[l] = (counts[l] || 0) + 1; });

console.log("Duplicate links:");
for (const [link, count] of Object.entries(counts)) {
    if (count > 1) {
        console.log(link, "appears", count, "times");
    }
}
