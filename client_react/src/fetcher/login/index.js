import post from "../../http/post";
import { REGISTERED_USER_URL } from "../config";

const handleRegisteredUser = async () => {
  try {
    const response = await post(REGISTERED_USER_URL);
  } catch (error) {
    console.log(error);
  }
};

export default { handleRegisteredUser };
