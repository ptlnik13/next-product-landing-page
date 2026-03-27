import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const audience = body.audience === "member" ? "member" : "guest";

    const response = NextResponse.json({
        success: true,
        audience,
    });

    response.cookies.set("audience", audience, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return response;
}
