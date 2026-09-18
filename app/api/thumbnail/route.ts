import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new NextResponse('URL is required', { status: 400 });
  }

  try {
    // 1. Fetch the Instagram/TikTok page HTML using a Googlebot User-Agent
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
      // Cache the HTML response in Next.js for a long time to avoid rate limits
      next: { revalidate: 86400 }
    });

    const html = await res.text();
    
    // 2. Extract the og:image meta tag
    const match = html.match(/<meta property="og:image" content="(.*?)"/);
    if (match && match[1]) {
      // Decode HTML entities like &amp;
      const imageUrl = match[1].replace(/&amp;/g, '&');
      
      // 3. Fetch the actual image data from the CDN
      const imageRes = await fetch(imageUrl);
      
      if (!imageRes.ok) {
        throw new Error('Failed to fetch image data from CDN');
      }

      const imageBuffer = await imageRes.arrayBuffer();
      
      // 4. Return the image directly with heavy caching
      return new NextResponse(imageBuffer, {
        headers: {
          'Content-Type': imageRes.headers.get('content-type') || 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      });
    }

    return new NextResponse('Thumbnail not found', { status: 404 });
  } catch (error) {
    console.error("Thumbnail proxy error:", error);
    return new NextResponse('Error fetching thumbnail', { status: 500 });
  }
}
