import ShowList from "../../components/showList/ShowList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <ShowList />
    </div>
  )
}

export default Home;