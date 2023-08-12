"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { v4 as uuidv4 } from "uuid";
import { setVideoID } from "../features/video/videoSlice";
import { truncateText } from "@/utils/truncateText";
import { getTimePassed } from "@/utils/getTimePassed";
import { VideosFeedTypes } from "@/types/VideosType";
import { decode } from "html-entities";
import LoadingVideoSpinner from "./Loaders/LoadingVideoSpinner";
import styles from "@/styles/Videos.module.scss";

const Videos = ({ videos }: VideosFeedTypes) => {
  const { data, isLoading, loadingRef } = useInfiniteScroll({
    initialData: videos,
    pageSize: 10,
    initialLoadCount: 20,
    loadingDelay: 1000,
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const getVideoID = (id: string) => {
    dispatch(setVideoID(id));
    router.push("/video");
  };

  // console.log(videoID);
  // console.log(videos);

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
                />
              </div>
              <p className={styles["video-title"]}>
                {truncateText(decode(video.snippet.title), 70)}
              </p>
              {pathname === "/channel" ? null : (
                <p className={styles["video-channel-title"]}>
                  {video.snippet.channelTitle}
                </p>
              )}
              {pathname === "/channel" ? (
                <p className={styles["video-publish-date-channel"]}>
                  {getTimePassed(video.snippet.publishTime)}
                </p>
              ) : (
                <p className={styles["video-publish-date"]}>
                  {getTimePassed(video.snippet.publishTime)}
                </p>
              )}
            </li>
          ))}
      </ul>

      <LoadingVideoSpinner isLoading={isLoading} loadingRef={loadingRef} />
    </>
  );
};

export default Videos;
