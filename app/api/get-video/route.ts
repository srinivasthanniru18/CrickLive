import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      "https://dev.vdocipher.com/api/videos/f1cecc0387424c5d9f5e72ad8c4766cf/otp",
      {
        method: "POST",
        headers: {
          Authorization: "Apisecret YOUR_API_SECRET",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ttl: 300, // link valid only for 5 minutes
        }),
      }
    );

    const data = await response.json();

    const secureUrl = `https://player.vdocipher.com/v2/?otp=${data.otp}&playbackInfo=${data.playbackInfo}`;

    return NextResponse.json({ url: secureUrl });
  } catch (err) {
    return NextResponse.json(
      { error: "Error generating video URL" },
      { status: 500 }
    );
  }
}
