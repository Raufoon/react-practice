import DetailsPanel from "./DetailsPanel";
import styles from "./Layout.module.css";
import LeftNavBar from "./LeftNavBar";

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <LeftNavBar />
      <main>My content</main>
      <DetailsPanel />
    </div>
  );
}
