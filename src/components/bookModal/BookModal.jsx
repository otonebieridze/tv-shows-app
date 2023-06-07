import { Modal } from "antd";
import styles from "./BookModal.module.css";

const BookModal = ({ isModalOpen, setIsModalOpen, show }) => {
  const handleBook = () => {
    alert("book")
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      className={styles.modal}
      title="Book Ticket"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <p style={{ marginTop: "20px" }}>Name: <span>{show?.show.name}</span></p>
      <p>Language: <span>{show?.show.language}</span></p>
      <p>
        Days:{" "}
        {show?.show.schedule.days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </p>
      <p>Time: <span>{show?.show.schedule.time}</span></p>

      <center>
        <button onClick={handleBook} className={styles["book-ticket-btn"]}>Book Ticket</button>
      </center>
    </Modal>
  );
};

export default BookModal;
