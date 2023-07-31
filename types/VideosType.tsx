export interface VideosType {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    title: string;
    thumbnails: {
      medium: {
        height: number;
        width: number;
        url: string;
      };
    };
  };
}

export interface VideosCategoryTypes {
  items: VideosType[];
}

export interface VideosFeedTypes {
  videos: VideosType[];
}
