import Image from "next/image";
import { useRouter } from "next/navigation";
import { setChannelID } from "@/features/channel/channelSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { SearchChannelsTypes } from "@/types/SearchChannelsType";
import styles from "@/styles/SearchChannels.module.scss";

const SearchChannels = ({ searchChannels }: SearchChannelsTypes) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getChannelID = (id: string) => {
    dispatch(setChannelID(id));
    router.push("/channel");
  };

  return (
    <>
      {searchChannels.filter((channel) => channel.id.kind === "youtube#channel")
        .length <= 0 ? null : (
        <ul className={styles["container"]}>
          {searchChannels
            .filter((channel) => channel.id.kind === "youtube#channel")
            .map((channel) => (
              <li
                key={uuidv4()}
                className={styles["channel-card"]}
                onClick={() => getChannelID(channel.id.channelId)}
              >
                <div className={styles["image-wrapper"]}>
                  <Image
                    src={channel.snippet.thumbnails.high.url}
                    alt={channel.snippet.channelTitle}
                    width={600}
                    height={400}
                    quality={90}
                    unoptimized
                  />
                </div>

                <h1 className={styles["channel-title"]}>
                  {channel.snippet.channelTitle}
                </h1>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default SearchChannels;
