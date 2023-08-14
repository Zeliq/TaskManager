import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MacBookAir3.module.css";
const MacBookAir3 = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookAir3}>
      <div className={styles.macbookAir3Child} />
      <div className={styles.macbookAir3Item} />
      <div className={styles.macbookAir3Inner} />
      <h3 className={styles.taskigo}>
        <span>Taski</span>
        <span className={styles.go}>Go</span>
      </h3>
      <div className={styles.home}>Home</div>
      <div className={styles.about}>About</div>
      <div className={styles.pro}>Pro</div>
      <div className={styles.logIn}>Log In</div>
      <div className={styles.signUp}>Sign Up</div>
      <section className={styles.descriptionParent}>
        <div className={styles.description}>Description</div>
        <input
          className={styles.frameChild}
          type="text"
          placeholder="Enter the Description"
          maxLength={260}
          minLength={-2}
          id="3"
        />
      </section>
      <div className={styles.createANew}>Create a new task</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.macbookAir3Child1} />
      <img
        className={styles.zIndianDay274Icon}
        alt=""
        src="/16304255-156z-indian-day-27-4@2x.png"
      />
      <div className={styles.loremIpsumDo}>
        Lorem Ipsum do torlles d ema maooroa upamecano mazroaip del ma rey messi
        is rhe goat.
      </div>
      <div className={styles.homework}>Homework</div>
      <div className={styles.macbookAir3Child2} />
      <div className={styles.div}>
        <span className={styles.span}>+</span>
        <span>{` `}</span>
      </div>
      <div className={styles.add}>Add</div>
      <Link className={styles.save} to="/">
        Save
      </Link>
      <Link
        className={styles.rectangleA}
        to="/"
        onClick={onRectangleLinkClick}
      />
    </div>
  );
};

export default MacBookAir3;
