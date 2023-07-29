import Axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url: string) => {
  const data = await Axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
