"use client";



import Welcome from "@/component/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Welcome/>
      </main>
    </div>
  );
}
