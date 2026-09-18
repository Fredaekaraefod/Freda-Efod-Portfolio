const fs = require('fs');

const file = 'lib/work-data.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. DPYRhC3jBJq -> Talking Head, featured: true.
// First, let's remove any existing entries for DPYRhC3jBJq to avoid duplicates, then add a fresh one.
content = content.replace(/\{[^}]*DPYRhC3jBJq[^}]*\},?\n?/g, '');

// 2. Add DPYRhC3jBJq as Talking Head
const talkingHeadEntry = `  {
    id: "th-fixed-1",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DPYRhC3jBJq/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: true
  },`;

// 3. Add DTAke94Cnu8 as The Experience (Events), featured: true
const experienceEntry = `  {
    id: "ev-fixed-1",
    title: "The Experience",
    context: "Event recap.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTAke94Cnu8/",
    tag: "Event",
    ratio: "4/5",
    category: "Events",
    client: "The Experience",
    featured: true
  }`;

content = content.replace(/\];\s*$/, ',\n' + talkingHeadEntry + '\n' + experienceEntry + '\n];\n');
fs.writeFileSync(file, content);
console.log("Fixed DPYRhC3jBJq and added DTAke94Cnu8");
