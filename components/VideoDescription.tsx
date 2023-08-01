import { useState } from "react";
import Link from "next/link";
import { useElementSize } from "@/hooks/useElementSize";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AiFillLike } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { IconContext } from "react-icons";
import styles from "@/styles/VideoDescription.module.scss";

dayjs.extend(relativeTime);

const getTimePassed = (uploadDate: string) => {
  const now = dayjs();
  const uploadTime = dayjs(uploadDate);
  return uploadTime.from(now);
};

const VideoDescription = () => {
  const [collapse, setCollapse] = useState(true);
  const [videoDetailRef, { height }] = useElementSize();

  const toggleCollapse = () => {
    setCollapse((col) => !col);
  };

  const collapseVideoDetail = () => {
    setCollapse(false);
  };

  const sampleText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat soluta sapiente explicabo quaerat necessitatibus! Accusamus, dolor unde nisi vero porro accusantium ullam necessitatibus exercitationem explicabo autem? Blanditiis aliquam quia natus reprehenderit beatae vero expedita earum quos sit veniam consequuntur praesentium, tenetur dolor tempore fuga repellat in iste quasi accusantium.";

  return (
    <>
      <h1 className={styles["video-title"]}>Video Title</h1>

      <div className={styles["channel-info"]}>
        <Link href="/">MrBeast</Link>
        <div className={styles["like-icon-wrapper"]}>
          <IconContext.Provider value={{ className: styles["like-icon"] }}>
            <AiFillLike />
          </IconContext.Provider>
          <p>200k</p>
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
            <p className={styles["views"]}>1M Views</p>
            <p className={styles["date"]}>{getTimePassed("04/19/2023")}</p>
            {[...Array(7)].map((_e, id) => (
              <p key={id} className={styles["tags"]}>
                #tag
              </p>
            ))}
          </div>

          <p className={styles["video-description-details"]}>{sampleText}</p>
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
