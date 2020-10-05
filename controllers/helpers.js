const getYear = () => {
  const myYear = new Date().getFullYear();
  return myYear;
};
const getHola = () => {
  const message = "Hola mundo";
  return message;
};
module.exports = {
  getYear,
  getHola,
};
