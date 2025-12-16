import axios from "axios";
import BACKEND_URL from "./config";
export const loginCall = async (userCredantionals, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      `${BACKEND_URL}/login`,
      userCredantionals
    );
    dispatch({ type: "LOGIN_SUCCESS", paylord: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILED", paylord: error });
  }
};
