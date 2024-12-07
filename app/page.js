import Banner from "@/components/Banner";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";

export default async function Home() {
  const videosData = await import("@/data/videos.json");
  return (
    <>
      <Banner />
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Streams of the day</h2>
          <a
            href="#"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            View all
          </a>
        </div>

        {/* Grid style video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videosData.default.map((video) => (
            <Link href={`/videos/${video.videoId}`} key={video.videoId}>
              <VideoCard video={video} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
