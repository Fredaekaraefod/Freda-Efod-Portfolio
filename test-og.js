const url = "https://www.instagram.com/reel/DXZK1GTDPC9/";

fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" } })
  .then(res => res.text())
  .then(html => {
    require('fs').writeFileSync('ig-response.html', html);
    console.log("Saved");
  })
  .catch(console.error);
