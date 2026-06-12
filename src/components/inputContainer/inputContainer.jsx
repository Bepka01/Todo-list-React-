import styles from "./inputContainer.module.scss";

const InputContainer = ({ children }) => {
  return <div className={styles.inputContainer}>{children}</div>;
};

export default InputContainer;
