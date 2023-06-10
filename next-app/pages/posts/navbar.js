import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
