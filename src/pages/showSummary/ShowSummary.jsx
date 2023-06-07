import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ShowSummary.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import BookModal from "../../components/bookModal/BookModal";

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    setShow(storedData.find((item) => item.show.id === Number(id)));
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles["show-details-container"]}>
        <h1 className={styles["show-name"]}>{show?.show.name}</h1>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
          }}
        >
          <img
            src={show?.show.image.original}
            alt="show-img"
            className={styles["show-image"]}
          />
          <div className={styles["show-details-div"]}>
            <p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <b style={{ marginLeft: "10px" }}>{show?.show.rating.average}</b>
            </p>
            <p>
              Genre:{" "}
              <span>
                {show?.show.genres.map((genre, index) => (
                  <span key={index}>{genre}</span>
                ))}
              </span>
            </p>
            <p>
              Type: <span>{show?.show.type}</span>
            </p>
            <p>
              Language: <span>{show?.show.language}</span>
            </p>
            <p>
              Premiered: <span>{show?.show.premiered}</span>
            </p>
            {show?.show.officialSite && (
              <p>
                Official Site:{" "}
                <a target="_blank" href={show?.show.officialSite}>
                  {show?.show.officialSite}
                </a>
              </p>
            )}
            <p className={styles["show-summary-text"]}>
              {show?.show.summary.replace(/<[^>]+>/g, "")}
            </p>
            <button className={styles["book-ticket-btn"]} onClick={showModal}>Book Ticket</button>
          </div>
        </div>
      </div>

      <BookModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} show={show} />
    </div>
  );
};

export default ShowSummary;
