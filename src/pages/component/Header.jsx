import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const user = JSON.parse(localStorage.getItem("user"));

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login", { replace: true });
};

  return (
    <header className={sidebarOpen ? "main-header sidebar-open" : "main-header"}>
      <div className="header-left">
        <h4 className="logo"></h4>
      </div>

      <div className="header-right">
        <div className="profile-area" onClick={() => setOpen(!open)}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2-j72Jxr_A-mqdurEKlaIC_4zuXaKnD72A&s"
            alt="profile"
            className="profile-img"
          />
          <span className="profile-name">{user?.name}</span>
        </div>

        {open && (
          <div className="profile-dropdown">
            <button onClick={() => navigate("/user")}>User</button>
            {/* <button onClick={() => navigate("/settings/profile")}>Profile</button>
            <button onClick={() => navigate("/settings")}>Settings</button> */}
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}