import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} TV Shows App. All rights reserved.</p>
    </div>
  );
}

export default Footer;
