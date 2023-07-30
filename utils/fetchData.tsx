export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url: string) => {
  const res = await fetch(`${BASE_URL}/${url}`, options);

  return res.json();
};
