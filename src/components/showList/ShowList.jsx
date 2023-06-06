import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./ShowList.module.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className={styles.container}>
      {shows.map((show) => (
        <div key={show.show.id} className={styles["show-item"]}>
          <img src={show.show.image.medium} alt="show-image" className={styles["show-image"]} />
          <p className={styles["premiered"]}>Premiered <span>{show.show.premiered}</span></p>
          <p className={styles["show-name"]}>{show.show.name}</p>
          <Link to={`/summary/${show.show.id}`}>
            <button className={styles["view-button"]}>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
