import styles from "../Logget-out/styles.module.css";
const ReButton = ({ onClick, style, text }) => {
  return (
    <button className={styles.reusable_button} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default ReButton;
