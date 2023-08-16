const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const fetchCategoryData = async (category: string) => {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&maxResults=50&order=date&q=${category}&regionCode=US&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  return res.json();
};
