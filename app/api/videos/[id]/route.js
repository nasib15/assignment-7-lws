import { getVideoById } from "@/app/api/data/videos";
import { getAllVideos } from "@/data/videos";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  return NextResponse.json(getVideoById(params.id));
}

export async function DELETE(request, { params }) {
  const videoId = params.id;
  const videoIndex = getAllVideos().findIndex(
    (video) => video.videoId === videoId
  );
  const deletedVideo = getAllVideos()[videoIndex];

  getAllVideos().splice(videoIndex, 1);

  return NextResponse.json({
    status: "OK",
    message: "Video deleted",
    deletedVideo,
  });
}
