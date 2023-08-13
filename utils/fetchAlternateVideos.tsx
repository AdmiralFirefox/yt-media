const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const fetchAlternateVideos = async (id: string) => {
  const res = await fetch(`${BASE_URL}/related?id=${id}&geo=US`, options);

  return res.json();
};
