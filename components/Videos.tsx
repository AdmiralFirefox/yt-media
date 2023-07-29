"use client";

import { RootState } from "@/app/store";
import { useSelector, useDispatch } from "react-redux";
import { setVideoID } from "../features/video/videoSlice";

interface VideosProps {
  videos: unknown;
}

const Videos = ({ videos }: VideosProps) => {
  const videoID = useSelector((state: RootState) => state.video.videoID);
  const dispatch = useDispatch();

  const getVideoID = (id: string) => {
    dispatch(setVideoID(id));
  };

  // console.log(videoID);

  return (
    <ul>
      {videos
        .filter((video) => video.id.kind === "youtube#video")
        .map((video) => (
          <li key={crypto.randomUUID()}>
            <p>{video.snippet.title}</p>
            <button onClick={() => getVideoID(video.id.videoId)}>
              Get Video ID
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Videos;
