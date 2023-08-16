import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { truncateText } from "@/utils/truncateText";
import { getTimePassed } from "@/utils/getTimePassed";
import { decode } from "html-entities";
import { SearchVideosDetailsType } from "@/types/SearchVideosType";
import LoadingSearchSpinner from "./Loaders/LoadingSearchSpinner";
import styles from "@/styles/SearchVideos.module.scss";

const SearchVideos = ({
  searchVideos,
  getVideoID,
}: SearchVideosDetailsType) => {
  const { data, loadingRef } = useInfiniteScroll({
    initialData: searchVideos,
    pageSize: 10,
    initialLoadCount: 20,
    loadingDelay: 1000,
  });

  return (
    <>
      <ul className={styles["container"]}>
        {data
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
                  priority
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

      {data.length === searchVideos.length ? null : (
        <LoadingSearchSpinner loadingRef={loadingRef} />
      )}
    </>
  );
};

export default SearchVideos;
