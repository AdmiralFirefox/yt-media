export interface ChannelDetailTypes {
  brandingSettings: {
    image: {
      bannerExternalUrl: string;
    };
  };
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
    customUrl: string;
  };
  statistics: {
    hiddenSubscriberCount: boolean;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
}

export interface ChannelDetailInfoType {
  channel: ChannelDetailTypes;
}

export interface ChannelType {
  items: ChannelDetailTypes[];
}
