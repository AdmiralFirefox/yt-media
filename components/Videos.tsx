"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setVideoID } from "../features/video/videoSlice";
import { truncateText } from "@/utils/truncateText";
import { VideosFeedTypes } from "@/types/VideosType";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { decode } from "html-entities";
import styles from "@/styles/Videos.module.scss";

dayjs.extend(relativeTime);

const getTimePassed = (uploadDate: string) => {
  const now = dayjs();
  const uploadTime = dayjs(uploadDate);
  return uploadTime.from(now);
};

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
            <p className={styles["video-channel-title"]}>
              {video.snippet.channelTitle}
            </p>
            <p className={styles["video-publish-date"]}>
              {getTimePassed(video.snippet.publishTime)}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default Videos;
