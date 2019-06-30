export const formatSecondsToDuration = (second: number) => {
  const minutes = Math.ceil(second / 60);
  const hour = Math.floor(minutes / 60);
  return hour > 0
    ? hour + '小时' + (minutes % 60) + '分'
    : '0时' + (minutes % 60) + '分';
};
