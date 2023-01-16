import http from "../config/http-common";
const getAll = () => {
  return http.get("/details/ca");
};

const create = data => {
  return http.post("/details/ca/createCA", data);
};

const createuserLogin = data => {
  return http.post("/users/createUser", data);
};

const CAService = {
  getAll,
  create,
  createuserLogin
};
export default CAService;
