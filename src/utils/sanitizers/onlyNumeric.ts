const onlyNumeric = (str: string) => {
  const regex = /\D/g;
  return str.replace(regex, '');
};

export default onlyNumeric;
