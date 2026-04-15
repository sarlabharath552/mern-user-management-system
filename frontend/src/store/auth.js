import { reactive } from "vue";

export const authState = reactive({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
});

export const setAuth = (data) => {
  authState.user = data.user;
  authState.token = data.token;

  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", data.token);
};

export const logout = () => {
  authState.user = null;
  authState.token = null;

  localStorage.clear();
};