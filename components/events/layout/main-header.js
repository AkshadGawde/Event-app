import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/' passHref>
          <div className={classes.link}>NextEvents</div>
        </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events' passHref>
              <div className={classes.link}>Browse All Events</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
