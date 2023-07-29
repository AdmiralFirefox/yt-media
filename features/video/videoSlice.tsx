import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoID {
  videoID: string;
}

const initialState: VideoID = {
  videoID: "",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoID: (state, action: PayloadAction<string>) => {
      state.videoID = action.payload;
    },
  },
});

export const { setVideoID } = videoSlice.actions;
export default videoSlice.reducer;
