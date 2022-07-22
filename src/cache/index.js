export const accessPinCache = {
  token: "",
  set: function (token) {
    this.token = token;
  },
  get: function () {
    return this.token;
  },
};
