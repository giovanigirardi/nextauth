import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Dashboard</h1>
      <p>{user?.email}</p>
    </>
  );
};

export default Dashboard;
