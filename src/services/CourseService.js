import http from "../config/http-common";
const getAll = () => {
  return http.get("/course/getCourseDetails");
};


const CourseService = {
  getAll
};
export default CourseService;
