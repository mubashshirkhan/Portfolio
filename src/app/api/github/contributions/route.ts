import { NextResponse } from "next/server";
import { fetchContributions } from "../../../../lib/github";

const supportedYears = new Set([2025, 2026]);

export async function GET(request: Request) {
  const yearValue = new URL(request.url).searchParams.get("year");
  const year = Number(yearValue);
  if (!yearValue || !Number.isInteger(year) || !supportedYears.has(year)) {
    return NextResponse.json({ error: "Only contribution years 2025 and 2026 are supported." }, { status: 400 });
  }
  try {
    return NextResponse.json(await fetchContributions(year));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load GitHub contributions right now.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
