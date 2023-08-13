import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { v4 as uuidv4 } from "uuid";
import { setVideoID } from "../features/video/videoSlice";
import { truncateText } from "@/utils/truncateText";
import { getTimePassed } from "@/utils/getTimePassed";
import { SuggestedVideosDescriptionType } from "@/types/SuggestedVideosType";
import { decode } from "html-entities";
import LoadingSuggestedSpinner from "./Loaders/LoadingSuggestedSpinner";
import styles from "@/styles/SuggestedVideos.module.scss";

const SuggestedVideos = ({ videos }: SuggestedVideosDescriptionType) => {
  const { data, loadingRef } = useInfiniteScroll({
    initialData: videos,
    pageSize: 5,
    initialLoadCount: 10,
    loadingDelay: 1000,
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const getVideoID = (id: string) => {
    dispatch(setVideoID(id));
    router.push("/video");
  };

  return (
    <div className={styles["suggestion-wrapper"]}>
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

      {data.length === videos.length ? null : (
        <LoadingSuggestedSpinner loadingRef={loadingRef} />
      )}
    </div>
  );
};

export default SuggestedVideos;
