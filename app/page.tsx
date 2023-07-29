import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import Axios from "axios";
import { categories } from "@/utils/categories";
import Videos from "@/components/Videos";
import styles from "./page.module.css";

export default async function Home() {
  // const data = fetchData("search?part=snippet&q=Latest%20Videos");
  // const videos = await data;

  return <main>{/* <Videos videos={videos.data.items} /> */}</main>;
}
