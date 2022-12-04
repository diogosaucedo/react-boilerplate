const isAlpha = (text: string) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(text);
};
export default isAlpha;
