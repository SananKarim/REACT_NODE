import post from "../../http/post";
import config from "../config";

export function handleRegisteredUser(data) {
  return post(config.REGISTERED_USER_URL, data)
    .then((response) => {
      console.log(response.json());
      return response.json();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
