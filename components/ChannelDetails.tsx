import Image from "next/image";
import { formatNumber } from "@/utils/formatNumber";
import styles from "@/styles/ChannelDetails.module.scss";

const ChannelDetails = ({ channel }) => {
  //   console.log(channel);

  return (
    <>
      {/* <div className={styles["banner-wrapper"]}>
        <Image
          src={channel.brandingSettings.image.bannerExternalUrl}
          alt=""
          width={600}
          height={100}
          quality={90}
          unoptimized
        />
      </div> */}

      <div className={styles["channel-details"]}>
        <div className={styles["channel-image-wrapper"]}>
          <Image
            src={channel.snippet.thumbnails.high.url}
            alt={channel.snippet.title}
            width={600}
            height={400}
            quality={90}
            unoptimized
          />
        </div>
        <div className={styles["channel-information"]}>
          <div className={styles["title"]}>
            <p>{channel.snippet.title}</p>
          </div>
          <div className={styles["statistics"]}>
            <p>{channel.snippet.customUrl}</p>
            {channel.statistics.hiddenSubscriberCount === false ? (
              <p>
                {formatNumber(channel.statistics.subscriberCount)} subscribers
              </p>
            ) : null}
            <p>{formatNumber(channel.statistics.videoCount)} videos</p>
            <p>{formatNumber(channel.statistics.viewCount)} views</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelDetails;
