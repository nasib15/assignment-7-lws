import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import getVideos from "@/utils/getVideos";
import Link from "next/link";
import VideoCard from "./VideoCard";

const VideoList = async ({ lang }) => {
  const videosData = await getVideos();
  const dict = await getDictionary(lang);

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{dict.streams.title}</h2>
        <a
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          {dict.streams.viewAll}
        </a>
      </div>

      {/* Grid style video cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videosData?.map((video) => (
          <Link href={`/${lang}/videos/${video.videoId}`} key={video.videoId}>
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default VideoList;
