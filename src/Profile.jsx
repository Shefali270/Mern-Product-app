import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout Successfully");
    navigate("/");
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <h3>Name : Shefali Verma</h3>

      <h3>Email : vshefali537@gmail.com</h3>

      <h3>Mobile Number : 8770157489</h3>

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;