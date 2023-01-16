import http from "../config/http-common";

const get = id => {
  return http.get(`/blogs/${id}`);
};
const getAll = (catID, username,recCount,page) => {
  return http.get(`/blogs/getblogs/${catID}/${username}/${recCount}/${page}`);
};

const getAllCategories = () => {
  return http.get(`/blogs/getBlogCategories`);
};

const createcomments = (body) => {

  return http.post("/blogs/createcomments", body);
};

const getAllComments = (BlogID) => {

  return http.get(`/blogs/getComments/${BlogID}`);
};

const createreactions = data => {
  return http.post("/blogs/insertreactions", data);
};

const getAllReactions = (data) => {
  console.log(data)

  return http.post("blogs/getBlogreactions", data);
};

const BlogsService = {
  getAll,
  get,
  getAllCategories,
  createcomments,
  getAllComments,
  createreactions,
  getAllReactions
 
};
export default BlogsService;
