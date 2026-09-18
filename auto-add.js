const fs = require('fs');
const KEYWORD_MAP = require('./keyword-map');

const urls = process.argv.slice(2);

if (urls.length === 0) {
  console.log("Usage: node auto-add.js <instagram-or-tiktok-url1> <url2> ...");
  process.exit(1);
}

async function fetchDescription(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    });
    const html = await res.text();
    const match = html.match(/<meta property="og:description" content="(.*?)"/);
    if (match && match[1]) {
      // Decode HTML entities
      return match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').toLowerCase();
    }
  } catch (e) {
    console.error("Failed to fetch", url, e);
  }
  return "";
}

function categorize(desc) {
  for (const [keyword, data] of Object.entries(KEYWORD_MAP)) {
    if (desc.includes(keyword.toLowerCase())) {
      return data;
    }
  }
  // Default fallback
  return { category: "Story / Mini-Doc", tag: "Video" };
}

async function main() {
  const file = 'lib/work-data.ts';
  let content = fs.readFileSync(file, 'utf8');

  for (const url of urls) {
    const baseLink = url.split('?')[0];
    if (content.includes(baseLink)) {
      console.log(`Skipping (already exists): ${baseLink}`);
      continue;
    }

    console.log(`Fetching caption for: ${baseLink}`);
    const desc = await fetchDescription(url);
    const sortedData = categorize(desc);

    // Generate random ID
    const id = 'auto-' + Math.random().toString(36).substr(2, 6);
    
    // We'll extract a short title from the client or category
    const title = sortedData.client || sortedData.category;

    const newProject = `  {
    id: "${id}",
    title: "${title}",
    context: "Auto-categorized video.",
    permalink: "${url}",
    tag: "${sortedData.tag}",
    ratio: "4/5",
    category: "${sortedData.category}",${sortedData.client ? `\n    client: "${sortedData.client}",` : ''}
    featured: false
  }`;

    // Inject into the file before the last ];
    content = content.replace(/\];\s*$/, ',\n' + newProject + '\n];\n');
    console.log(`✅ Added as: ${sortedData.client || sortedData.category}`);
  }

  fs.writeFileSync(file, content);
  console.log("Done! work-data.ts has been updated.");
}

main();
