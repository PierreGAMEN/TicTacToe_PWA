"use client";

import Welcome from "@/component/Welcome/Welcome";
import AnimateTitle from "@/component/AnimateTitle/AnimateTitle";
import styles from "./page.module.css";
import { useState } from "react";
import "./page.scss"

export default function Home() {
  const [welcomePage, setWelcomePage] = useState(true);

  const handleCloseWelcome = () => {
    setWelcomePage(false);
  };

  return (
    <div className="page">
      <main className={styles.main}>
        <AnimateTitle />
        {welcomePage && <Welcome handleCloseWelcome={handleCloseWelcome} />}
      </main>
    </div>
  );
}
