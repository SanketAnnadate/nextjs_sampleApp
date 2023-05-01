import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItems}>
            <Link className="{styles.navbarLink}" href="/Movie">
              Home
            </Link>
          </li>
          <li className={styles.navbarItems}>
            <Link className="{styles.navbarLink}" href="/Movie">
              About
            </Link>
          </li>
          <li className={styles.navbarItems}>
            <Link className="{styles.navbarLink}" href="/Movie">
              Movies
            </Link>
          </li>
          <li className={styles.navbarItems}>
            <Link className="{styles.navbarLink}" href="/Movie">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
