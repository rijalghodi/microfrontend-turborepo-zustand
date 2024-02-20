import React from "react";
import { useCount } from "@/hooks/useCount";

import styles from "./Counter.module.css";

export function Counter() {
  //   const {} = useCoun;
  const { decrement, increment, count } = useCount();
  return (
    <div className={styles.counterBox}>
      <p>Counter From Child App</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => decrement()}>
          -
        </button>
        <button className={styles.button} onClick={() => increment()}>
          +
        </button>
      </div>
      <p>{count}</p>
    </div>
  );
}
