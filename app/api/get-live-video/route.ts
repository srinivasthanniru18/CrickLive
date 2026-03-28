import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiSecret = process.env.VDOCIPHER_API_SECRET || "YOUR_API_SECRET";
    
    const response = await fetch(
      "https://dev.vdocipher.com/api/videos/a22894311c644a198f9a7620c59a881d/otp",
      {
        method: "POST",
        headers: {
          Authorization: `Apisecret ${apiSecret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ttl: 300, // valid for 5 minutes
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("VDO.cipher API error:", data);
      return NextResponse.json(
        { error: `VDO.cipher API error: ${data.error || response.statusText}` },
        { status: response.status }
      );
    }

    if (!data.otp || !data.playbackInfo) {
      console.error("Missing OTP or playbackInfo:", data);
      return NextResponse.json(
        { error: "Invalid response from VDO.cipher" },
        { status: 500 }
      );
    }

    const secureUrl = `https://player.vdocipher.com/v2/?otp=${data.otp}&playbackInfo=${data.playbackInfo}`;

    return NextResponse.json({ url: secureUrl });
  } catch (err) {
    console.error("Error generating video URL:", err);
    return NextResponse.json(
      { error: "Failed to load video" },
      { status: 500 }
    );
  }
}
