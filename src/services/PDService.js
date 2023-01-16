import http from "../config/http-common";
const getAll = () => {
  return http.get("/details/pd");
};

const create = data => {
  return http.post("/details/pd/createPD", data);
};

const findByEmail = email => {
  return http.get(`/details/pd/emailPD/${email}`);
};
const PDService = {
  getAll,
  create,
  findByEmail
};
export default PDService;
