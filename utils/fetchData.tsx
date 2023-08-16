const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const fetchData = async (url: string) => {
  const res = await fetch(
    `${BASE_URL}/${url}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );

  return res.json();
};
