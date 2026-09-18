const fs = require('fs');

const file = 'lib/work-data.ts';
let content = fs.readFileSync(file, 'utf8');

// We will extract the allProjects array using eval.
// Since it's TS, we might need to strip some types, but the array is just JS objects.
const arrayStartIndex = content.indexOf('export const allProjects: Project[] = [');
const beforeArray = content.slice(0, arrayStartIndex + 'export const allProjects: Project[] = ['.length);
const arrayString = content.slice(arrayStartIndex + 'export const allProjects: Project[] = ['.length, content.lastIndexOf('];'));

// Evaluate the array
let arr;
try {
  arr = eval('[' + arrayString + ']');
} catch (e) {
  console.error("Failed to eval array", e);
  process.exit(1);
}

// Overrides requested by user:
// DaM-kP5MSLs -> Valor AI (Brand Campaigns)
// DS99jlPCtaN -> Talking Head
// DJ7S5h3t6cE -> Caleb University Chapel (Events)
// DN3Ijn2WDX2 -> REMOVE

const overrides = {
  "https://www.instagram.com/mindsofrida/reel/DaM-kP5MSLs/": {
    title: "Valor AI", tag: "Brand", category: "Brand Campaigns", client: "Valor AI", featured: true
  },
  "https://www.instagram.com/mindsofrida/reel/DS99jlPCtaN/": {
    title: "Talking Head", tag: "Talking Head", category: "Talking Head", client: undefined, featured: false
  },
  "https://www.instagram.com/reel/DJ7S5h3t6cE/?stkn=ajdqbGc0cm42NGdx": { // Caleb Uni, wait, let's match by ID or regex
     // Handled dynamically below
  }
};

// Remove DN3Ijn2WDX2
arr = arr.filter(p => !p.permalink.includes('DN3Ijn2WDX2'));

// Deduplicate
const uniqueMap = new Map();

for (const p of arr) {
  // normalize permalink to remove query params for duplicate checking
  const baseLink = p.permalink.split('?')[0];
  
  // Apply overrides before deduplicating
  if (baseLink.includes('DaM-kP5MSLs')) {
    p.title = "Valor AI";
    p.tag = "Brand";
    p.category = "Brand Campaigns";
    p.client = "Valor AI";
    // user said "this is for valor", previously they said it was on home page. I'll keep featured if it was featured.
  }
  if (baseLink.includes('DS99jlPCtaN')) {
    p.title = "Talking Head";
    p.tag = "Talking Head";
    p.category = "Talking Head";
    delete p.client;
  }
  if (baseLink.includes('DJ7S5h3t6cE')) {
    p.title = "Caleb University Chapel";
    p.tag = "Event";
    p.category = "Events";
    p.client = "Caleb University Chapel";
    p.featured = true;
  }

  // we keep the LATEST one we process (since the file appends at the bottom)
  uniqueMap.set(baseLink, p);
}

const finalArr = Array.from(uniqueMap.values());

const newArrayString = finalArr.map(p => {
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
console.log("Successfully deduplicated and applied fixes! Count reduced from", arr.length, "to", finalArr.length);
