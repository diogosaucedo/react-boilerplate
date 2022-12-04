const onlyAlpha = (str: string) => {
  const regex = /[^a-záàâãéèêíïóôõöúçñ ]/gim;
  return str.replace(regex, '');
};

export default onlyAlpha;
