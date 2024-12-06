import Image from "next/image";

const VideoCard = ({ video }) => {
  const { title, thumbnail, channelTitle } = video;
  return (
    <div className="rounded-lg overflow-hidden bg-color-gray">
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
    </div>
  );
};
export default VideoCard;
