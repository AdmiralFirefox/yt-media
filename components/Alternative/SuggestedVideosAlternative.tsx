import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { v4 as uuidv4 } from "uuid";
import { setVideoID } from "../../features/video/videoSlice";
import { truncateText } from "@/utils/truncateText";
import { getTimePassed } from "@/utils/getTimePassed";
import { SuggestedVideosAltDescriptionType } from "@/types/Alternative/SuggestedVideosAltType";
import { decode } from "html-entities";
import LoadingSuggestedSpinner from "../Loaders/LoadingSuggestedSpinner";
import styles from "@/styles/SuggestedVideos.module.scss";

const SuggestedVideosAlternative = ({
  videos,
}: SuggestedVideosAltDescriptionType) => {
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
          .filter((video) => video.type === "video")
          .map((video) => (
            <li
              key={uuidv4()}
              onClick={() => getVideoID(video.videoId)}
              className={styles["video-card"]}
            >
              <div className={styles["image-container"]}>
                <Image
                  src={video.thumbnail[video.thumbnail.length - 1].url}
                  alt={video.title}
                  width={600}
                  height={400}
                  quality={90}
                  unoptimized
                />
              </div>
              <div className={styles["video-details"]}>
                <p className={styles["video-title"]}>
                  {truncateText(decode(video.title), 70)}
                </p>
                <p className={styles["video-channel-title"]}>
                  {video.channelTitle}
                </p>
                <p className={styles["video-publish-date"]}>
                  {getTimePassed(video.publishDate)}
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

export default SuggestedVideosAlternative;
