const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  next: { revalidate: 10 },
};

export const fetchCategoryData = async (category: string) => {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&regionCode=US&maxResults=50&q=${category}`,
    options
  );

  return res.json();
};
