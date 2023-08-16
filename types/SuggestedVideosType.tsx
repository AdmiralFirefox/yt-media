export interface SuggestedVideoType {
  type: string;
  videoId: string;
  thumbnail: {
    url: string;
  }[];
  title: string;
  channelTitle: string;
  publishDate: string;
}

export interface SuggestedVideosType {
  data: SuggestedVideoType[];
}

export interface SuggestedVideosDescriptionType {
  videos: SuggestedVideoType[];
}
