import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Fetch the willowcricket.php page to get the streaming embed/content
    const response = await fetch("https://streamcrichd.com/update/willowcricket.php", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch stream data" },
        { status: response.status }
      );
    }

    const html = await response.text();

    // Extract the streaming URL or embed information from the HTML
    // For now, return the HTML content and construct the player on client side
    
    // Look for common streaming patterns
    let streamUrl = "";
    
    // Try to find HLS/DASH stream URLs
    const hlsMatch = html.match(/(?:src|url|source)['"]?:\s*['"]([^'"]*\.m3u8[^'"]*)['"]/i);
    const dashMatch = html.match(/(?:src|url|source)['"]?:\s*['"]([^'"]*\.mpd[^'"]*)['"]/i);
    const iframeMatch = html.match(/<iframe[^>]*src=['"]([^'"]+)['"]/i);
    const sourceMatch = html.match(/<source[^>]*src=['"]([^'"]+)['"]/i);

    if (hlsMatch) {
      streamUrl = hlsMatch[1];
    } else if (dashMatch) {
      streamUrl = dashMatch[1];
    } else if (iframeMatch) {
      streamUrl = iframeMatch[1];
    } else if (sourceMatch) {
      streamUrl = sourceMatch[1];
    } else {
      // If no direct URL found, return the page and let client handle it
      streamUrl = "https://streamcrichd.com/update/willowcricket.php";
    }

    return NextResponse.json({ 
      url: streamUrl,
      type: streamUrl.includes("m3u8") ? "hls" : streamUrl.includes("mpd") ? "dash" : "page"
    });
  } catch (err) {
    console.error("Error fetching live stream:", err);
    return NextResponse.json(
      { error: "Failed to load live stream", url: "https://streamcrichd.com/update/willowcricket.php" },
      { status: 500 }
    );
  }
}
