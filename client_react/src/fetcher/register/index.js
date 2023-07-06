import post from "../../http/post";
import config from "../config";

export async function handleRegisteredUser() {
  try {
    const response = await post(config.REGISTERED_USER_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
}
