import { NextResponse } from "next/server";
import { getAllVideos } from "../data/videos";

export async function GET() {
  return NextResponse.json(getAllVideos());
}
