import styles from "./ulList.module.scss";

const UlList = ({ children }) => {
  return <ul className={styles.UlList}>{children}</ul>;
};

export default UlList;
