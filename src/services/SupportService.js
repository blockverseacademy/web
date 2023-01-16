import http from "../config/http-common";
const getAll = () => {
  return http.get("/support");
};
const get = id => {
  return http.get(`/support/${id}`);
};
const create = data => {
  return http.post("/support/createSupport", data);
};

const SupportService = {
  getAll,
  get,
  create

};
export default SupportService;
