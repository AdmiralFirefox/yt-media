export interface VideoDetailsType {
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    publishedAt: string;
    tags: string[];
  };
  statistics: {
    likeCount: string;
    viewCount: string;
  };
}

export interface VideoDescriptionTypes {
  video: VideoDetailsType;
}

export interface VideoTypes {
  items: VideoDetailsType[];
}
