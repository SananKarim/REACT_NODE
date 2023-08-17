import post from "../../http/post";
import config from "../config";

export function handleRegisteredUser(data) {
  return post(config.REGISTERED_USER_URL, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
