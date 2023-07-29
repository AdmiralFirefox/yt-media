"use client";

import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export default function Video() {
  const videoID = useSelector((state: RootState) => state.video.videoID);

  console.log(videoID);

  return (
    <main>
      <h1>Video</h1>
    </main>
  );
}
