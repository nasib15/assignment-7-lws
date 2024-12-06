import VideoCard from "./VideoCard";

const VideoList = async () => {
  const videosData = await import("@/data/videos.json");

  return (
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
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </section>
  );
};
export default VideoList;
