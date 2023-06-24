export const getClasses = (classes) => {
  // eslint-disable-next-line prettier/prettier
  classes.filter(item => item !== '').join(' ').trim()
};
