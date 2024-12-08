import { NextResponse } from "next/server";
import { getAllVideos, getVideoById } from "../../data/videos";

export async function GET(request, { params }) {
  const video = getVideoById(params.id);

  if (!video) {
    return NextResponse.json(
      { message: `This video with ${params.id} id was not found!` },
      { status: 404 }
    );
  }

  return NextResponse.json(video);
}

export async function PATCH(request, { params }) {
  const video = await request.json();
  const videoId = params.id;
  const videoIndex = getAllVideos().findIndex(
    (video) => video.videoId === videoId
  );

  // Validate request body fields
  const allowedFields = ["title", "description"];
  const receivedFields = Object.keys(video);
  const invalidFields = receivedFields.filter(
    (field) => !allowedFields.includes(field)
  );

  if (invalidFields.length > 0) {
    return NextResponse.json(
      {
        status: "ERROR",
        message:
          "Invalid fields provided. Only title and description are allowed",
      },
      { status: 400 }
    );
  }

  const { title, description } = video;

  const updatedVideo = {
    ...getAllVideos()[videoIndex],
    ...(title && { title }),
    ...(description && { description }),
  };

  return NextResponse.json({
    status: "OK",
    updatedVideo,
  });
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
