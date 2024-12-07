import avatar from "@/public/assets/avatar.png";
import { PlayIcon } from "@/svg/Icon";
import { getRelativeTime } from "@/utils/getRelativeTime";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries/dictionaries";

const VideoDetailsPage = async ({ params: { id, lang } }) => {
  const videosData = await import("@/data/videos.json");
  const video = videosData.default.find((video) => video.videoId === id);

  const dict = await getDictionary(lang);

  if (!video) {
    notFound();
  }

  const { title, videoId, channelTitle } = video;

  const otherVideosWithoutThis = videosData.default.filter(
    (video) => video.videoId !== id
  );

  return (
    <main className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-3/4">
        <div className="relative">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            className="w-full aspect-video h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center space-x-4">
              <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                <PlayIcon />
              </button>
              <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                {dict.video.live}
              </div>
              <span className="text-sm">46:02</span>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                {dict.video.donate}
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
        <div className="flex items-center space-x-4 mt-2">
          <Image src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{channelTitle}</p>
          </div>
          <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
            {dict.video.subscribe}
          </button>
        </div>
      </div>

      {/* You may like section */}
      <div className="lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">{dict.video.youMayLike}</h2>
        <div className="space-y-4">
          {otherVideosWithoutThis.slice(0, 3).map((video) => (
            <Link
              href={`/${lang}/videos/${video.videoId}`}
              key={video.videoId}
              className="flex items-start space-x-4"
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
export default VideoDetailsPage;
