import { getAllVideos } from "@/app/api/data/videos";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getAllVideos());
}
