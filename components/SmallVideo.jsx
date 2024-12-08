"use client";

import { getRelativeTime } from "@/utils/getRelativeTime";
import { handleRedirect } from "@/utils/handleRedirect";
import Image from "next/image";

const SmallVideo = ({ video, lang }) => {
  return (
    <div
      onClick={() => handleRedirect(lang, `/${lang}/videos/${video.videoId}`)}
      key={video.videoId}
      className="flex items-start space-x-4 cursor-pointer"
    >
      <Image
        src={video.thumbnail}
        width={107}
        height={80}
        alt={video.title}
        className="w-30 h-20 rounded object-cover"
      />
      <div>
        <h3 className="font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-400">{video.channelTitle}</p>
        <p className="text-sm text-gray-400">
          {getRelativeTime(new Date(video.publishTime))}
        </p>
      </div>
    </div>
  );
};
export default SmallVideo;
