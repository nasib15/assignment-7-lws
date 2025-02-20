import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Modal from "@/components/Modal";
import SmallVideo from "@/components/SmallVideo";
import avatar from "@/public/assets/avatar.png";
import { PlayIcon } from "@/svg/Icon";
import getVideos from "@/utils/getVideos";
import Image from "next/image";
import { notFound } from "next/navigation";

const InterceptedVideoDetailsPage = async ({ params: { id, lang } }) => {
  const videosData = await getVideos();
  const video = videosData?.find((video) => video.videoId === id);

  const dict = await getDictionary(lang);

  if (!video) {
    notFound();
  }

  const { title, videoId, channelTitle } = video;

  const otherVideosWithoutThis = videosData.filter(
    (video) => video.videoId !== id
  );

  return (
    <Modal>
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
            <Image
              src={avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
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
          <h2 className="text-xl font-semibold mb-4">
            {dict.video.youMayLike}
          </h2>
          <div className="space-y-4">
            {otherVideosWithoutThis?.slice(0, 3).map((video) => (
              <SmallVideo key={video.videoId} lang={lang} video={video} />
            ))}
          </div>
        </div>
      </main>
    </Modal>
  );
};
export default InterceptedVideoDetailsPage;
