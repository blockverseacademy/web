import http from "../config/http-common";
const getAll = () => {
  return http.get("/notification/getNotifications");
};

const NotificationService = {
  getAll
};
export default NotificationService;
