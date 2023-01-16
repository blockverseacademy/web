export const PDdata = () => {
  return JSON.parse(localStorage.getItem("PD"));
};
export const EDData = () => {
  return JSON.parse(localStorage.getItem("ED"));
};
export const IDData = () => {
  return JSON.parse(localStorage.getItem("ID"));
};
export const PPData = () => {
  return JSON.parse(localStorage.getItem("PP"));
};
export const CSData = () => {
  return JSON.parse(localStorage.getItem("CS"));
};

const LSService = {
  PDdata,
  EDData,
  IDData,
  PPData,
  CSData
};
export default LSService;
