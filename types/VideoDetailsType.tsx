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
