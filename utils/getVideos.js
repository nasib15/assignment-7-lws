const getVideos = async () => {
  try {
    const videos = await import("@/data/videos.json");
    return videos.default;
  } catch (error) {
    return null;
  }
};

export default getVideos;
