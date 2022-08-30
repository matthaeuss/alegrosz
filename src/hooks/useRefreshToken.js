import useAuth from "./useAuth";
import axios from "../api/axios";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  return (refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    setAuth((prev) => ({ ...prev, accessToken: response.data.accessToken }));

    return response.data.accessToken;
  });
};

export default useRefreshToken;
