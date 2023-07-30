import Videos from "@/components/Videos";
import { fetchData } from "@/utils/fetchData";

type Params = {
  params: {
    category_name: string;
  };
};

export default async function Category({ params }: Params) {
  // const data = fetchData(
  //   `search?part=snippet&maxResults=50&q=${params.category_name}`
  // );
  // const category = await data;

  return <main>{/* <Videos videos={category.items} /> */}</main>;
}
