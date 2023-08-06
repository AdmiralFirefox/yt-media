import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { truncateText } from "@/utils/truncateText";
import { getTimePassed } from "@/utils/getTimePassed";
import { decode } from "html-entities";
import { SearchVideosDetailsType } from "@/types/SearchVideosType";
import styles from "@/styles/SearchVideos.module.scss";

const SearchVideos = ({
  searchVideos,
  getVideoID,
}: SearchVideosDetailsType) => {
  return (
    <ul className={styles["container"]}>
      {searchVideos
        .filter((video) => video.id.kind === "youtube#video")
        .map((video) => (
          <li
            key={uuidv4()}
            onClick={() => getVideoID(video.id.videoId)}
            className={styles["video-card"]}
          >
            <div className={styles["image-container"]}>
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={600}
                height={400}
                quality={90}
                unoptimized
              />
            </div>

            <div className={styles["video-details"]}>
              <p className={styles["video-title"]}>
                {truncateText(decode(video.snippet.title), 70)}
              </p>
              <p className={styles["video-channel-title"]}>
                {video.snippet.channelTitle}
              </p>
              <p className={styles["video-publish-date"]}>
                {getTimePassed(video.snippet.publishTime)}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SearchVideos;
