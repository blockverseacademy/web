import http from "../config/http-common";
const getAll = () => {
  return http.get("/details/ed");
};

const create = data => {
  return http.post("/details/ed/createED", data);
};

const EDService = {
  getAll,
  create
};
export default EDService;
