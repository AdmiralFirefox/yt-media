import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { setChannelID } from "@/features/channel/channelSlice";
import { useDispatch } from "react-redux";
import { useElementSize } from "@/hooks/useElementSize";
import { AiFillLike } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { IconContext } from "react-icons";
import { VideoDescriptionTypes } from "@/types/VideoDetailsType";
import { formatNumber } from "@/utils/formatNumber";
import { getTimePassed } from "@/utils/getTimePassed";
import { decode } from "html-entities";
import styles from "@/styles/VideoDescription.module.scss";

const VideoDescription = ({ video }: VideoDescriptionTypes) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [collapse, setCollapse] = useState(true);
  const [videoDetailRef, { height }] = useElementSize();

  const toggleCollapse = () => {
    setCollapse((col) => !col);

    if (scrollRef.current && collapse === false && height >= 650) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const collapseVideoDetail = () => {
    setCollapse(false);
  };

  const getChannelID = (id: string) => {
    dispatch(setChannelID(id));
    router.push("/channel");
  };

  return (
    <>
      <h1 className={styles["video-title"]}>{decode(video.snippet.title)}</h1>

      <div className={styles["channel-info"]}>
        <button onClick={() => getChannelID(video.snippet.channelId)}>
          {video.snippet.channelTitle}
        </button>
        <div className={styles["like-icon-wrapper"]} ref={scrollRef}>
          <IconContext.Provider value={{ className: styles["like-icon"] }}>
            <AiFillLike />
          </IconContext.Provider>
          <p>{formatNumber(video.statistics.likeCount)}</p>
        </div>
      </div>

      <div
        className={styles["video-description-wrapper"]}
        style={{
          maxHeight: collapse ? "5em" : `${height}px`,
          cursor: collapse ? "pointer" : "auto",
        }}
        onClick={collapseVideoDetail}
      >
        <div
          ref={videoDetailRef}
          className={styles["video-description-content"]}
        >
          <div className={styles["video-statistics"]}>
            <p className={styles["views"]}>
              {formatNumber(video.statistics.viewCount)} views
            </p>
            <p className={styles["date"]}>
              {getTimePassed(video.snippet.publishedAt)}
            </p>
            {video.snippet.tags !== undefined ? (
              <>
                {video.snippet.tags.slice(0, 4).map((tag, id) => (
                  <p key={id} className={styles["tags"]}>
                    #{tag}
                  </p>
                ))}
              </>
            ) : null}
          </div>

          <p className={styles["video-description-details"]}>
            {video.snippet.description}
          </p>

          <div className={styles["extra-tags-wrapper"]}>
            {video.snippet.tags !== undefined ? (
              <>
                {video.snippet.tags.map((tag, id) => (
                  <p key={id} className={styles["extra-tags"]}>
                    #{tag}
                  </p>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles["show-more-button-wrapper"]}>
        <button className={styles["show-more-button"]} onClick={toggleCollapse}>
          Show {collapse ? "more" : "less"}
          <IconContext.Provider value={{ className: styles["chevron-icon"] }}>
            {collapse ? <BsChevronDown /> : <BsChevronUp />}
          </IconContext.Provider>
        </button>
      </div>
    </>
  );
};

export default VideoDescription;
