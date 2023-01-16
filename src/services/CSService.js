import http from "../config/http-common";
const getAll = () => {
  return http.get("/details/cs");
};

const create = data => {
  return http.post("/details/cs/createCS", data);
};

const CSService = {
  getAll,
  create
};
export default CSService;
