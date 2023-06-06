import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.title}>TV Shows App</Link>
    </div>
  )
}

export default Header;