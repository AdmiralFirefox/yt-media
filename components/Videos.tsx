"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store";
import { useSelector, useDispatch } from "react-redux";
import { setVideoID } from "../features/video/videoSlice";
import { truncateText } from "@/utils/truncateText";
import { VideosFeedTypes } from "@/types/VideosType";
import styles from "@/styles/Videos.module.scss";

const Videos = ({ videos }: VideosFeedTypes) => {
  const router = useRouter();

  const videoID = useSelector((state: RootState) => state.video.videoID);
  const dispatch = useDispatch();

  const getVideoID = (id: string) => {
    dispatch(setVideoID(id));
    router.push("/video");
  };

  // console.log(videoID);
  // console.log(videos);

  return (
    <ul className={styles["container"]}>
      {videos
        .filter((video) => video.id.kind === "youtube#video")
        .map((video) => (
          <li
            key={crypto.randomUUID()}
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
            <p className={styles["video-title"]}>{truncateText(video.snippet.title, 70)}</p>
            <p className={styles["video-channel-title"]}>{video.snippet.channelTitle}</p>
          </li>
        ))}
    </ul>
  );
};

export default Videos;
