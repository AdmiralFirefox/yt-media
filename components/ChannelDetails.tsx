import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formatNumber } from "@/utils/formatNumber";
import { ChannelDetailInfoType } from "@/types/ChannelDetailsType";
import styles from "@/styles/ChannelDetails.module.scss";

const ChannelDetails = ({ channel }: ChannelDetailInfoType) => {
  const largeScreens = useMediaQuery("(min-width: 30em)");

  return (
    <>
      {channel.brandingSettings.image !== undefined ? (
        <div className={styles["banner-wrapper"]}>
          {largeScreens ? (
            <Image
              src={`${channel.brandingSettings.image.bannerExternalUrl}=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`}
              alt=""
              width={600}
              height={400}
              quality={90}
              unoptimized
              priority
            />
          ) : (
            <Image
              src={`${channel.brandingSettings.image.bannerExternalUrl}=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj`}
              alt=""
              width={600}
              height={400}
              quality={90}
              unoptimized
              priority
            />
          )}
        </div>
      ) : null}

      <div
        className={styles["channel-details"]}
        style={{
          paddingTop:
            channel.brandingSettings.image !== undefined ? "1.7em" : "6.5em",
        }}
      >
        <div className={styles["channel-image-wrapper"]}>
          <Image
            src={channel.snippet.thumbnails.high.url}
            alt={channel.snippet.title}
            width={600}
            height={400}
            quality={90}
            unoptimized
            priority
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
