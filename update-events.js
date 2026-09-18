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

// 1. Caleb Uni Chapel -> not featured
arr.forEach(p => {
  if (p.permalink.includes('DJ7S5h3t6cE')) {
    p.featured = false;
  }
});

// 2. Extract out The Experience, SWIG Outreach, and HOTR Party so we can order them first
let theExperience, swig, hotr;
arr = arr.filter(p => {
  const link = p.permalink.split('?')[0];
  if (link.includes('DTAke94Cnu8')) {
    theExperience = p;
    theExperience.featured = true;
    theExperience.category = "Events";
    theExperience.tag = "Event";
    theExperience.client = "The Experience";
    theExperience.title = "The Experience";
    return false;
  }
  if (link.includes('DPYRhC3jBJq')) {
    swig = p;
    swig.featured = true;
    swig.category = "Events";
    swig.tag = "Event";
    swig.client = "SWIG Outreach";
    swig.title = "SWIG Outreach";
    return false;
  }
  if (link.includes('DXkDMh8Ch7D')) {
    hotr = p;
    hotr.featured = true;
    hotr.category = "Events";
    hotr.tag = "Event";
    hotr.client = "HOTR Party";
    hotr.title = "HOTR Party";
    return false;
  }
  return true;
});

// Insert them at the very beginning of the array so they appear first!
// The Experience goes absolute first among events.
// Wait, the grid maps through `CATEGORY_ORDER` then filters `allProjects`. So their absolute position in `allProjects` dictates their internal order within the "Events" block on the homepage.
arr.unshift(hotr);
arr.unshift(swig);
arr.unshift(theExperience);

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
console.log("Updated events order and featured flags");
