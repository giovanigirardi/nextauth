import { FormEvent, useContext, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

import styles from "../styles/Home.module.css";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = { email, password };

    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;
