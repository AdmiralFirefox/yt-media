import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import styles from "@/styles/SearchChannels.module.scss";

const SearchChannels = ({ searchChannels }) => {
  return (
    <>
      {searchChannels.filter((channel) => channel.id.kind === "youtube#channel")
        .length <= 0 ? null : (
        <ul className={styles["container"]}>
          {searchChannels
            .filter((channel) => channel.id.kind === "youtube#channel")
            .map((channel) => (
              <li key={uuidv4()} className={styles["channel-card"]}>
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
