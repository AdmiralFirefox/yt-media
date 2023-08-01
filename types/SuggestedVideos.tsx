export interface SuggestedVideoType {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    title: string;
    publishTime: string;
    thumbnails: {
      medium: {
        height: number;
        width: number;
        url: string;
      };
    };
  };
}

export interface SuggestedVideosType {
  items: SuggestedVideoType[];
}

export interface SuggestedVideosDescriptionType {
  videos: SuggestedVideoType[];
}
