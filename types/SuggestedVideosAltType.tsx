export interface SuggestedVideoAltType {
  type: string;
  videoId: string;
  thumbnail: {
    url: string;
  }[];
  title: string;
  channelTitle: string;
  publishDate: string;
}

export interface SuggestedVideosAltType {
  data: SuggestedVideoAltType[];
}

export interface SuggestedVideosAltDescriptionType {
  videos: SuggestedVideoAltType[];
}
