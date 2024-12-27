import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  axios
    .get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
      headers: {
        Authorization: `Beared ${token}`,
      },
    })
    .then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
    return <div>
        <div>
            <h1>
                Logged Out
            </h1>
        </div>
  </div>;
};

export default CaptainLogout;
