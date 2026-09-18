const fs = require('fs');

const file = 'lib/work-data.ts';
let content = fs.readFileSync(file, 'utf8');

const arrayStartIndex = content.indexOf('export const allProjects: Project[] = [');
const beforeArray = content.slice(0, arrayStartIndex + 'export const allProjects: Project[] = ['.length);
const arrayString = content.slice(arrayStartIndex + 'export const allProjects: Project[] = ['.length, content.lastIndexOf('];'));

let arr;
try {
  arr = eval('[' + arrayString + ']');
} catch (e) {
  console.error("Failed to eval array", e);
  process.exit(1);
}

// Set featured: true for two talking head videos
let updatedCount = 0;
arr.forEach(p => {
  if (p.permalink.includes('DSuY7ieCrsW') || p.permalink.includes('DSjybQwimLO')) {
    p.featured = true;
    updatedCount++;
  }
});

const newArrayString = arr.map(p => {
  return `  {
    id: ${JSON.stringify(p.id)},
    title: ${JSON.stringify(p.title)},
    context: ${JSON.stringify(p.context)},
    permalink: ${JSON.stringify(p.permalink)},
    tag: ${JSON.stringify(p.tag)},
    ratio: ${JSON.stringify(p.ratio)},
    category: ${JSON.stringify(p.category)},${p.client ? `\n    client: ${JSON.stringify(p.client)},` : ''}
    featured: ${p.featured}
  }`;
}).join(',\n');

const newContent = beforeArray + '\n' + newArrayString + '\n];\n';
fs.writeFileSync(file, newContent);
console.log(`Featured ${updatedCount} videos`);
