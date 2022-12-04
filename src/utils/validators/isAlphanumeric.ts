const isAlphanumeric = (text: string) => {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(text);
};

export default isAlphanumeric;
