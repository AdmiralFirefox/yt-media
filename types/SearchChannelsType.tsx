export interface SearchChannelTypes {
  id: {
    kind: string;
    channelId: string;
  };
  snippet: {
    channelTitle: string;
    title: string;
    publishTime: string;
    thumbnails: {
      high: {
        height: number;
        width: number;
        url: string;
      };
    };
  };
}

export interface SearchChannelsTypes {
  searchChannels: SearchChannelTypes[];
}
