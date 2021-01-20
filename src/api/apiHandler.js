import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  ///   ROUTERS : AUTH  ///
  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editUserInfo(userInfo) {
    return service
      .patch("/api/user/me", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  ///   ROUTERS : USER  ///

  getUserInfo() {
    return service
      .get("/api/user/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUserInfo(data) {
    return service
      .patch("/api/user/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  ///   ROUTERS : COMPANY  ///
  createCompany(companyInfo) {
    return service
      .post("/api/company/mycompany", companyInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserCompanyInfo() {
    return service
      .get("/api/company/mycompany")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editCompanyInfo(companyInfo) {
    return service
      .patch("/api/company/mycompany", companyInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  ///   ROUTERS : ORDER  ///
  getAllOrders() {
    return service
      .get("/api/order")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneOrder(orderId) {
    return service
      .get(`/api/order/${orderId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOneOrder(data) {
    return service
      .post("/api/order", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOneOrder(orderId, data) {
    return service
      .patch(`/api/order/${orderId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOneComment(orderId, data) {
    return service
      .patch(`/api/order/comment/${orderId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
