export const truncateText = (text: string, length: number, end = "...") => {
  return text.length < length ? text : text.substring(0, length) + end;
};
