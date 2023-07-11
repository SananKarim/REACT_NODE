import post from "../../http/post";
import config from "../config";

export async function handleRegisteredUser(data) {
  try {
    console.log("i am here", config.REGISTERED_USER_URL, data);
    const response = await post(config.REGISTERED_USER_URL, data);

    console.log("response.data", response);
    return response;
  } catch (error) {
    console.log(" here");

    return Promise.reject(error);
    console.log(error);
  }
}
