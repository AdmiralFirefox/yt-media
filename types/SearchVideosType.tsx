export interface SearchVideoType {
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

export interface SearchVideosType {
  items: SearchVideoType[];
}

export interface SearchVideosDetailsType {
  searchVideos: SearchVideoType[];
  getVideoID: (id: string) => void;
}
