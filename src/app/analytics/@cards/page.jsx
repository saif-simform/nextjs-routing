import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/app/ui/dashboard/card/card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={styles.texts}>
        <span className={styles.title}> Total Users</span>
        <span className={styles.number}> 15.01</span>
        <span className={styles.details}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
