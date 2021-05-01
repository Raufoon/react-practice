import styles from "./index.module.css";
import { useState } from "react";
import { ReactComponent as CollapseIcon } from "./icons/arrow-left2.svg";
import { ReactComponent as ExpandIcon } from "./icons/arrow-right2.svg";

export default function DetailsPanel() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.DetailsPanel} ${isExpanded ? styles.expanded : ""}`}
    >
      <div>
        <button onClick={() => setExpanded((prev) => !prev)}>
          {isExpanded ? <ExpandIcon /> : <CollapseIcon />}
        </button>
      </div>
      {isExpanded && (
        <section className={styles.detailsSection}>
          All the details are here
        </section>
      )}
    </div>
  );
}
