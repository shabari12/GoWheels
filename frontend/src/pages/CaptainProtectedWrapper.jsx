import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        console.log("Fetching captain profile...");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        if (isMounted) {
          setCaptain(response.data.captain);
        }
      } catch (err) {
        console.error("Error fetching profile:", err.response?.data || err.message);
        if (isMounted && err.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  if (!captain) return <div>Loading...</div>;

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
