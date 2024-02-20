import Head from "next/head";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
// import { useCount } from "@repo/global-state";
import { useCount } from "@/hooks/useCount";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Counter = dynamic(() => import("child/Counter").then((v) => v.Counter), {
  ssr: false,
});

export default function Home() {
  const { count } = useCount();
  return (
    <>
      <Head>
        <title>Main App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Main App</h1>
        <p>Count in Main App : {count}</p>
        <Counter />
      </main>
    </>
  );
}
