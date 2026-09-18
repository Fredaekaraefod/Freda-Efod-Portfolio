const url = "https://www.instagram.com/mindsofrida/reels/";

fetch(url, {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  }
})
.then(res => res.text())
.then(html => {
  if(html.includes("mindsofrida")) console.log("Profile loaded");
  else console.log("Blocked by login wall");
  
  const matches = html.match(/\/reel\/[a-zA-Z0-9_-]+/g);
  console.log("Regex matches:", matches ? [...new Set(matches)] : "None");
})
.catch(console.error);
