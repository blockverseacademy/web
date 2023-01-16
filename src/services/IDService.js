import http from "../config/http-common";
const getAll = () => {
  return http.get("/details/id");
};

const create = data => {
  return http.post("/details/id/createID", data);
};

const IDService = {
  getAll,
  create
};
export default IDService;
