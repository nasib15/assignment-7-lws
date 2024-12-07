import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ video }) => {
  const { title, thumbnail, videoId, channelTitle } = video;
  return (
    <Link
      href={`/videos/${videoId}`}
      className="rounded-lg overflow-hidden bg-color-gray"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={160}
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{channelTitle}</p>
      </div>
    </Link>
  );
};
export default VideoCard;
