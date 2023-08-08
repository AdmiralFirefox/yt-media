import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChannelID {
  channelID: string;
}

const initialState: ChannelID = {
  channelID: "",
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelID: (state, action: PayloadAction<string>) => {
      state.channelID = action.payload;
    },
  },
});

export const { setChannelID } = channelSlice.actions;
export default channelSlice.reducer;