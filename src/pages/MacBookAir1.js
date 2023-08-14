import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MacBookAir1.module.css";
const MacBookAir1 = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='createANew']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/macbook-air-2");
  }, [navigate]);

  const onAddClick = useCallback(() => {
    navigate("/macbook-air-2");
  }, [navigate]);

  return (
    <div className={styles.macbookAir1}>
      <div className={styles.macbookAir1Child} />
      <div className={styles.macbookAir1Item} />
      <div className={styles.manageAllYourContainer}>
        <p className={styles.manageAllYour}>{`Manage all your `}</p>
        <p className={styles.manageAllYour}>tasks now at one place.</p>
      </div>
      <img
        className={styles.zIndianDay274Icon}
        alt=""
        src="/16304255-156z-indian-day-27-41@2x.png"
      />
      <div className={styles.macbookAir1Inner} />
      <div className={styles.taskigo}>
        <span>Taski</span>
        <span className={styles.go}>Go</span>
      </div>
      <div className={styles.home}>Home</div>
      <div className={styles.about}>About</div>
      <div className={styles.pro}>Pro</div>
      <div className={styles.logIn}>Log In</div>
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.rectangleDiv} />
      <div
        className={styles.createANew}
      >{`Create a new task                 `}</div>
      <div className={styles.div} onClick={onTextClick}>{`>`}</div>
      <div className={styles.createANew1} data-scroll-to="createANew">
        Create a new task
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.macbookAir1Child1} />
      <div className={styles.macbookAir1Child2} />
      <div className={styles.loremIpsumDo}>
        Lorem Ipsum do torlles d ema maooroa upamecano mazroaip del ma rey messi
        is rhe goat.
      </div>
      <div className={styles.homework}>Homework</div>
      <Link
        className={styles.rectangleA}
        to="/macbook-air-2"
        onClick={onRectangleLinkClick}
      />
      <div className={styles.div1}>
        <span className={styles.span}>+</span>
        <span>{` `}</span>
      </div>
      <Link className={styles.add} to="/macbook-air-2" onClick={onAddClick}>
        Add
      </Link>
      <div className={styles.div2}>{`</>`}</div>
    </div>
  );
};

export default MacBookAir1;
