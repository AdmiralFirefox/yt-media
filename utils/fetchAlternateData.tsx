const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const fetchAlternateData = async (url: string) => {
  const res = await fetch(`${BASE_URL}/${url}`, options);

  return res.json();
};
