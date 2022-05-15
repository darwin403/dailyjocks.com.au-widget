import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>UNDERWEAR DOWN UNDER</h1>
      <h2 className={styles.subTitle}>
        Data reveals The Jockstrap Capital of Australia & each states underwear
        buying habits
      </h2>
    </header>
  );
};

export default Header;
