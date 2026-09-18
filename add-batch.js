const fs = require('fs');

const file = 'lib/work-data.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. Add "Movie Edits" to CATEGORY_ORDER and ARCHIVE_FILTERS
if (!content.includes('"Movie Edits"')) {
    content = content.replace(/("Talking Head",)/g, '$1\n  "Movie Edits",');
}

const newProjects = [
  // EVENTS
  { id: 'ev-10', title: 'SWIG Outreach', context: 'Event recap.', permalink: 'https://www.instagram.com/mindsofrida/reel/DPYRhC3jBJq/', tag: 'Event', ratio: '4/5', category: 'Events', client: 'SWIG Outreach', featured: false },
  { id: 'ev-11', title: 'David Efod', context: 'Introduction recap.', permalink: 'https://www.instagram.com/mindsofrida/reel/DQyu9gFincY/', tag: 'Event', ratio: '4/5', category: 'Events', client: 'David Efod', featured: false },
  { id: 'ev-12', title: 'Speaking Engagement', context: 'Event recap.', permalink: 'https://www.instagram.com/mindsofrida/reel/DZuceeBzGRR/', tag: 'Event', ratio: '4/5', category: 'Events', client: 'Speaking Engagement', featured: false },
  { id: 'ev-13', title: 'The Experience 20', context: 'Event recap.', permalink: 'https://www.instagram.com/mindsofrida/reel/DS99jlPCtaN/', tag: 'Event', ratio: '4/5', category: 'Events', client: 'The Experience 20', featured: false },
  { id: 'ev-14', title: 'HOTR Party', context: 'Event recap.', permalink: 'https://www.instagram.com/mindsofrida/reel/DXkDMh8Ch7D/', tag: 'Event', ratio: '4/5', category: 'Events', client: 'HOTR Party', featured: false },
  
  // VALOR AI
  { id: 'valor-7', title: 'Valor AI', context: 'Brand campaign.', permalink: 'https://www.instagram.com/mindsofrida/reel/DaM-kP5MSLs/', tag: 'Brand', ratio: '4/5', category: 'Brand Campaigns', client: 'Valor AI', featured: false },
  { id: 'valor-8', title: 'Valor AI', context: 'Brand campaign.', permalink: 'https://www.instagram.com/mindsofrida/reel/DUeHyTLisaH/', tag: 'Brand', ratio: '4/5', category: 'Brand Campaigns', client: 'Valor AI', featured: false },
  
  // NANCY HANSON
  { id: 'nh-8', title: 'Nancy Hanson', context: 'Brand campaign.', permalink: 'https://www.instagram.com/mindsofrida/reel/DSCcangCtEs/', tag: 'Brand', ratio: '4/5', category: 'Brand Campaigns', client: 'Nancy Hanson', featured: false },
  { id: 'nh-9', title: 'Nancy Hanson', context: 'Brand campaign.', permalink: 'https://www.instagram.com/mindsofrida/reel/DSEfId2iiuC/', tag: 'Brand', ratio: '4/5', category: 'Brand Campaigns', client: 'Nancy Hanson', featured: false },

  // TALKING HEAD
  { id: 'th-1', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DSLSBW2ihBa/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-2', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DSjybQwimLO/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-3', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DSuY7ieCrsW/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-4', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DS99jlPCtaN/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-5', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DTNbqd7igLk/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-6', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DUJqnTuCmHH/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-7', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DUeHyTLisaH/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-8', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/DXkDMh8Ch7D/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },
  { id: 'th-9', title: 'Talking Head', context: 'Insightful narrative.', permalink: 'https://www.instagram.com/mindsofrida/reel/Db7nttNqHFb/', tag: 'Talking Head', ratio: '4/5', category: 'Talking Head', featured: false },

  // SKITS
  { id: 'sk-10', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DTfKElKirpv/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-11', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DcauWyPKvIZ/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: true },
  { id: 'sk-12', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DXT7KAnittY/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: true },
  { id: 'sk-13', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DTme4tqCoOc/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-14', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DS5C8YCiokI/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-15', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DS7AxlGCuvE/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-16', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DS99jlPCtaN/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-17', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DTBCe-gCnPP/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-18', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DTDJTiYCjNr/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: false },
  { id: 'sk-19', title: 'Skit', context: 'Engaging skit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DaM-kP5MSLs/', tag: 'Comedy', ratio: '4/5', category: 'Skits', featured: true },

  // MOVIE EDIT
  { id: 'mv-1', title: 'Mount Zion Film Ministries', context: 'Abbatoir cut.', permalink: 'https://www.instagram.com/mindsofrida/reel/DZ-B-L4qvjb/', tag: 'Film', ratio: '4/5', category: 'Movie Edits', client: 'Mount Zion Film Ministries', featured: false },
  { id: 'mv-2', title: 'Mount Zion Film Ministries', context: 'Abbatoir cut.', permalink: 'https://www.instagram.com/mindsofrida/reel/DaJi4pqqE_5/', tag: 'Film', ratio: '4/5', category: 'Movie Edits', client: 'Mount Zion Film Ministries', featured: false },
  { id: 'mv-3', title: 'Blood Sisters', context: 'Film edit.', permalink: 'https://www.instagram.com/mindsofrida/reel/DaM-kP5MSLs/', tag: 'Film', ratio: '4/5', category: 'Movie Edits', client: 'Blood Sisters', featured: false },
];

const newProjectsString = newProjects.map(p => `  {
    id: "${p.id}",
    title: "${p.title}",
    context: "${p.context}",
    permalink: "${p.permalink}",
    tag: "${p.tag}",
    ratio: "${p.ratio}",
    category: "${p.category}",
${p.client ? `    client: "${p.client}",\n` : ''}    featured: ${p.featured}
  }`).join(',\n');

content = content.replace(/\];\s*$/, ',\n' + newProjectsString + '\n];\n');
fs.writeFileSync(file, content);
console.log("Done inserting new projects");
