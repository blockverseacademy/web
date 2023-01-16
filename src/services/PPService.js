import http from "../config/http-common";
const getAll = () => {
  return http.get("/details/pp");
};

const create = data => {
  return http.post("/details/pp/createPP", data);
};

const PPService = {
  getAll,
  create
};
export default PPService;
