export type Ratio = "4/5" | "16/9" | "1/1";

export interface Project {
  id: string;
  title: string;
  context: string;
  permalink: string;
  tag: string;
  ratio: Ratio;
  category: string;
  client?: string;
  featured: boolean;
  views?: number;
  thumbnailUrl?: string; // Static thumbnail to replace live embeds
}

// Base stats that will automatically update as you add more projects/views to the list
export const STATS = {
  yearsEditing: 3,
  baseProjects: 50,
  baseViews: 7000000, // E.g., 7 Million views (update this to your actual starting number)
};

export const CATEGORY_ORDER = [
  "Brand Campaigns",
  "Events",
  "Talking Head",
  "Movie Edits",
  "Story / Mini-Doc",
  "Skits",
];

export const ARCHIVE_FILTERS = [
  "All",
  "Brand Campaigns",
  "Tony Elumelu Foundation",
  "Nancy Hanson",
  "Valor AI",
  "HWY Granola",
  "The Vcs Hub",
  "Events",
  "Caleb University Chapel",
  "Talking Head",
  "Movie Edits",
  "Skits",
];

export const allProjects: Project[] = [
  {
    id: "ev-fixed-1",
    title: "The Experience",
    context: "Event recap.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTAke94Cnu8/",
    tag: "Event",
    ratio: "4/5",
    category: "Events",
    client: "The Experience",
    featured: true
  },
  {
    id: "th-fixed-1",
    title: "SWIG Outreach",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DPYRhC3jBJq/",
    tag: "Event",
    ratio: "4/5",
    category: "Events",
    client: "SWIG Outreach",
    featured: true
  },
  {
    id: "th-8",
    title: "HOTR Party",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DXkDMh8Ch7D/",
    tag: "Event",
    ratio: "4/5",
    category: "Events",
    client: "HOTR Party",
    featured: true
  },
  {
    id: "tef-1",
    title: "Tony Elumelu Foundation",
    context: "Fast-paced rhythm cut & sound design for Tony Elumelu Foundation.",
    permalink: "https://www.instagram.com/reel/DV_eKJGDKmr/?stkn=ajZiNjl1eXZncDI0",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-2",
    title: "Tony Elumelu Foundation",
    context: "Engaging jump-cuts and animated graphics for social.",
    permalink: "https://www.instagram.com/reel/DWBnXP5DIRT/?stkn=MTJhMnhjeHJmbzU4Nw==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-3",
    title: "Tony Elumelu Foundation",
    context: "Emotional narrative highlighting beneficiary success stories.",
    permalink: "https://www.instagram.com/reel/DWLzu51DOe3/?stkn=MTk3MHJqMGp5aGM4MA==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-4",
    title: "Tony Elumelu Foundation",
    context: "High-energy event recap with dynamic motion graphics.",
    permalink: "https://www.instagram.com/reel/DW8x2L8DOSi/?stkn=czI3eHBrbThhaGs4",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-5",
    title: "Tony Elumelu Foundation",
    context: "Macro visuals, seamless kinetic transitions, and textured foley.",
    permalink: "https://www.instagram.com/reel/DXMgpDRjIZ3/?stkn=MTV4cXAzczd1N2xxZg==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-6",
    title: "Tony Elumelu Foundation",
    context: "Polished multi-cam narrative edit for social material.",
    permalink: "https://www.instagram.com/reel/DXZK1GTDPC9/?stkn=eDJzdWJwNmQ4azRt",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: true
  },
  {
    id: "tef-7",
    title: "Tony Elumelu Foundation",
    context: "Beat-matched multi-cam editing with high-energy sync.",
    permalink: "https://www.instagram.com/reel/DXuMVj4E5Q1/?stkn=eDV3cWZzMnk4dTNs",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-8",
    title: "Tony Elumelu Foundation",
    context: "Voiceover pacing and atmospheric color grading.",
    permalink: "https://www.instagram.com/reel/DYfByjfs5rl/?stkn=a3Z5M3Zzd3Nnc3Y0",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-9",
    title: "Tony Elumelu Foundation",
    context: "Pacing that respects the audience's time.",
    permalink: "https://www.instagram.com/reel/DV_gmnPsbVr/?stkn=dHBjb2x5bXd3M3R4",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "tef-10",
    title: "Tony Elumelu Foundation",
    context: "Cinematic cuts for brand storytelling.",
    permalink: "https://www.instagram.com/reel/DWLzPfZMd2n/?stkn=bm1wdGowY3Vkbnky",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Tony Elumelu Foundation",
    featured: false
  },
  {
    id: "nh-1",
    title: "Nancy Hanson",
    context: "Engaging brand storytelling for Nancy Hanson.",
    permalink: "https://www.instagram.com/reel/DZZfjaHNR0t/?stkn=bzhnZmpwYndjamZu",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "nh-2",
    title: "Nancy Hanson",
    context: "High-retention reel with dynamic captions.",
    permalink: "https://www.instagram.com/reel/DYeXarstlPd/?stkn=ODR1bjQxc25oZmp3",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: true
  },
  {
    id: "nh-3",
    title: "Nancy Hanson",
    context: "Fast-paced jump cuts for social impact.",
    permalink: "https://www.instagram.com/reel/DYe2GlZqg9m/?stkn=MWk4NWdzbDNrNG85bg==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "nh-4",
    title: "Nancy Hanson",
    context: "Polished multi-cam narrative edit.",
    permalink: "https://www.instagram.com/reel/DYjpJwfK5zc/?stkn=MTBtaW00am9zOXJpZA==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "nh-5",
    title: "Nancy Hanson",
    context: "Visual storytelling with clean aesthetic.",
    permalink: "https://www.instagram.com/reel/DYlyuxWN8Bl/?stkn=MWFtbWxtd2xla245dA==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "nh-6",
    title: "Nancy Hanson",
    context: "Professional branding and color grade.",
    permalink: "https://www.instagram.com/reel/DYtgPE4KIVB/?stkn=MXdmOXkwanZmdWlkYQ==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "nh-7",
    title: "Nancy Hanson",
    context: "Pacing that respects the audience's time.",
    permalink: "https://www.instagram.com/reel/DY4e7gfqb5Z/?stkn=MTIzOW96am82NG1odw==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "valor-1",
    title: "Valor AI",
    context: "Engaging brand storytelling for Valor AI.",
    permalink: "https://www.instagram.com/reel/DUvEMyTjJgw/?stkn=MTNpenFiZ3RlOHZ6cg==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: false
  },
  {
    id: "valor-2",
    title: "Valor AI",
    context: "Dynamic social media cut.",
    permalink: "https://www.instagram.com/reel/DWGbxzojHFr/?stkn=MW52cXJlcDNwNWtqMw==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: false
  },
  {
    id: "valor-3",
    title: "Valor AI",
    context: "High-retention reel with dynamic captions.",
    permalink: "https://www.instagram.com/reel/DWYX17RjBl1/?stkn=MW9xdWQ3cG5ldjNsZw==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: false
  },
  {
    id: "valor-4",
    title: "Valor AI",
    context: "Fast-paced jump cuts for social impact.",
    permalink: "https://www.instagram.com/reel/DazZ32TM3Oe/?stkn=Z2M5YXJpcDk1cXQ5",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: false
  },
  {
    id: "valor-5",
    title: "Valor AI",
    context: "Polished multi-cam narrative edit.",
    permalink: "https://www.instagram.com/reel/Da2houEMYnC/?stkn=MTFqOXlicGN0YngzZg==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: false
  },
  {
    id: "valor-6",
    title: "Valor AI",
    context: "Featured brand highlight.",
    permalink: "https://www.instagram.com/reel/DYfb67cMiqO/?stkn=dTgwNTJrNTBxYjhm",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: true
  },
  {
    id: "hwy-1",
    title: "HWY Granola",
    context: "Product highlight and visual pacing.",
    permalink: "https://www.instagram.com/reel/DRndA69CIop/?stkn=MTg5OWQ0MDcxOGJxZA==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "HWY Granola",
    featured: false
  },
  {
    id: "hwy-2",
    title: "HWY Granola",
    context: "Engaging commercial cut.",
    permalink: "https://www.instagram.com/reel/DVamdwIiPID/?stkn=OTY5aXg5Y3Rjb2Zo",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "HWY Granola",
    featured: false
  },
  {
    id: "hwy-3",
    title: "HWY Granola",
    context: "Featured brand highlight.",
    permalink: "https://www.instagram.com/reel/DaFnVy5KbAO/?stkn=MTZ6cXIxNng5azIxag==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "HWY Granola",
    featured: true
  },
  {
    id: "vcs-1",
    title: "The Vcs Hub",
    context: "Engaging commercial cut.",
    permalink: "https://www.instagram.com/reel/DPKFEVyjftL/?stkn=MWp1NzF1bmwwMWtkZA==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "The Vcs Hub",
    featured: false
  },
  {
    id: "vcs-2",
    title: "The Vcs Hub",
    context: "High-retention reel with dynamic captions.",
    permalink: "https://www.instagram.com/reel/DPbIhXQDW3a/?stkn=bjE0ZGpqdmU0ZG5t",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "The Vcs Hub",
    featured: false
  },
  {
    id: "vcs-3",
    title: "The Vcs Hub",
    context: "Fast-paced jump cuts for social impact.",
    permalink: "https://www.instagram.com/reel/DQ9WfRfjM52/?stkn=MWlsNzZpOXp4eXc2Nw==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "The Vcs Hub",
    featured: false
  },
  {
    id: "vcs-4",
    title: "The Vcs Hub",
    context: "Polished multi-cam narrative edit.",
    permalink: "https://www.instagram.com/reel/DRTo5ooDHaD/?stkn=NXBxNzgwd2VoNnpk",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "The Vcs Hub",
    featured: false
  },
  {
    id: "vcs-6",
    title: "The Vcs Hub",
    context: "Professional branding and color grade.",
    permalink: "https://www.instagram.com/reel/DNQWZfqsHib/?stkn=MTl2aTlnbWc5aWlmYg==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "The Vcs Hub",
    featured: false
  },
  {
    id: "vcs-7",
    title: "The Vcs Hub",
    context: "Featured brand highlight.",
    permalink: "https://www.instagram.com/reel/DOGJorIjzvC/?stkn=dzNwNG5yenp4Mzhw",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "The Vcs Hub",
    featured: true
  },
  {
    id: "caleb-1",
    title: "Caleb University Chapel",
    context: "Event highlight and cinematic recap.",
    permalink: "https://www.instagram.com/reel/DFf-8BZtlGb/?stkn=MWsya3R4OXBvZWJnOQ==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-2",
    title: "Caleb University Chapel",
    context: "Dynamic event coverage.",
    permalink: "https://www.instagram.com/reel/DF3VykcNai5/?stkn=MXZpNGhuNXRjcHZtdQ==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-3",
    title: "Caleb University Chapel",
    context: "Engaging summary with strong pacing.",
    permalink: "https://www.instagram.com/reel/DGP334ztlxL/?stkn=MXE2ZzRtdzZsdnhkbA==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-4",
    title: "Caleb University Chapel",
    context: "High-energy event recap.",
    permalink: "https://www.instagram.com/reel/DFPJCnrtnNz/?stkn=Z29iZndkb2g5czdl",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-5",
    title: "Caleb University Chapel",
    context: "Visual storytelling for live event.",
    permalink: "https://www.instagram.com/reel/DJvv6fWttDD/?stkn=MWRkdGF6eTQ0Mmo3YQ==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-6",
    title: "Caleb University Chapel",
    context: "Event highlights with clean aesthetic.",
    permalink: "https://www.instagram.com/reel/DKCKjePNTi-/?stkn=MTlyMXFxanoxenczdg==",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-7",
    title: "Caleb University Chapel",
    context: "Cinematic moments and crowd engagement.",
    permalink: "https://www.instagram.com/reel/DKZUAHzNkWg/?stkn=Yno0anR6djRzYTVz",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-8",
    title: "Caleb University Chapel",
    context: "Powerful narrative from live footage.",
    permalink: "https://www.instagram.com/reel/DKcZ1S5s4P9/?stkn=aGoxbmg1eTJvcjU=",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-9",
    title: "Caleb University Chapel",
    context: "Featured event highlight.",
    permalink: "https://www.instagram.com/reel/DJ7S5h3t6cE/?stkn=ajdqbGc0cm42NGdx",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "caleb-10",
    title: "Caleb University Chapel",
    context: "Emotional beats and strong editing.",
    permalink: "https://www.instagram.com/reel/DHc34dqt0n1/?stkn=d3gxdGE5bWVwaTMw",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "skit-new-2",
    title: "Minds of Frida",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DS-EoAXCpG2/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "sk-16",
    title: "Talking Head",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DS99jlPCtaN/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: true
  },
  {
    id: "sk-15",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DS7AxlGCuvE/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "sk-14",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DS5C8YCiokI/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "skit-new-6",
    title: "Minds of Frida",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DSw_m4iiu_z/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "th-3",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DSuY7ieCrsW/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: true
  },
  {
    id: "th-2",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DSjybQwimLO/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: true
  },
  {
    id: "th-1",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DSLSBW2ihBa/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: false
  },
  {
    id: "nh-9",
    title: "Nancy Hanson",
    context: "Brand campaign.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DSEfId2iiuC/",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "nh-8",
    title: "Nancy Hanson",
    context: "Brand campaign.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DSCcangCtEs/",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Nancy Hanson",
    featured: false
  },
  {
    id: "skit-new-12",
    title: "Minds of Frida",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DRndA69CIop/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "skit-new-14",
    title: "Minds of Frida",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DRF12qkisjZ/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "ev-11",
    title: "David Efod",
    context: "Introduction recap.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DQyu9gFincY/",
    tag: "Event",
    ratio: "4/5",
    category: "Events",
    client: "David Efod",
    featured: false
  },
  {
    id: "skit-new-18",
    title: "Minds of Frida",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DOtAC4yCDB9/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "skit-new-19",
    title: "Minds of Frida",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DOGJorIjzvC/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "skit-new-21",
    title: "Caleb University Chapel",
    context: "Personal content & skits.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DJ7S5h3t6cE/",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Caleb University Chapel",
    featured: false
  },
  {
    id: "ev-12",
    title: "Speaking Engagement",
    context: "Event recap.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DZuceeBzGRR/",
    tag: "Event",
    ratio: "4/5",
    category: "Events",
    client: "Speaking Engagement",
    featured: false
  },
  {
    id: "mv-3",
    title: "Valor AI",
    context: "Film edit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DaM-kP5MSLs/",
    tag: "Brand",
    ratio: "4/5",
    category: "Brand Campaigns",
    client: "Valor AI",
    featured: false
  },
  {
    id: "th-7",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DUeHyTLisaH/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: false
  },
  {
    id: "th-5",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTNbqd7igLk/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: false
  },
  {
    id: "th-9",
    title: "Talking Head",
    context: "Insightful narrative.",
    permalink: "https://www.instagram.com/mindsofrida/reel/Db7nttNqHFb/",
    tag: "Talking Head",
    ratio: "4/5",
    category: "Talking Head",
    featured: false
  },
  {
    id: "sk-10",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTfKElKirpv/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "sk-11",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DcauWyPKvIZ/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: true
  },
  {
    id: "sk-12",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DXT7KAnittY/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: true
  },
  {
    id: "sk-13",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTme4tqCoOc/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "sk-17",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTBCe-gCnPP/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "sk-18",
    title: "Skit",
    context: "Engaging skit.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DTDJTiYCjNr/",
    tag: "Comedy",
    ratio: "4/5",
    category: "Skits",
    featured: false
  },
  {
    id: "mv-1",
    title: "Mount Zion Film Ministries",
    context: "Abbatoir cut.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DZ-B-L4qvjb/",
    tag: "Film",
    ratio: "4/5",
    category: "Movie Edits",
    client: "Mount Zion Film Ministries",
    featured: false
  },
  {
    id: "mv-2",
    title: "Mount Zion Film Ministries",
    context: "Abbatoir cut.",
    permalink: "https://www.instagram.com/mindsofrida/reel/DaJi4pqqE_5/",
    tag: "Film",
    ratio: "4/5",
    category: "Movie Edits",
    client: "Mount Zion Film Ministries",
    featured: false
  }
];
