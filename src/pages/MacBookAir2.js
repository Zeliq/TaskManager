import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MacBookAir2.module.css";
const MacBookAir2 = () => {
  const navigate = useNavigate();

  const onSaveClick = useCallback(() => {
    navigate("/macbook-air-3");
  }, [navigate]);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookAir2}>
      <div className={styles.macbookAir2Child} />
      <div className={styles.macbookAir2Item} />
      <section className={styles.whatIsThe}>What is the task?</section>
      <div className={styles.macbookAir2Inner} />
      <div className={styles.taskigo}>
        <span>Taski</span>
        <span className={styles.go}>Go</span>
      </div>
      <div className={styles.home}>Home</div>
      <div className={styles.about}>About</div>
      <div className={styles.pro}>Pro</div>
      <div className={styles.logIn}>Log In</div>
      <div className={styles.signUp}>Sign Up</div>
      <input
        className={styles.frameInput}
        type="text"
        placeholder="Enter the task"
      />
      <section className={styles.descriptionParent}>
        <div className={styles.description}>Description</div>
        <section className={styles.wrapper}>
          <div className={styles.div}>{`>`}</div>
        </section>
      </section>
      <div className={styles.createANew}>Create a new task</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.macbookAir2Child1} />
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
      <div className={styles.macbookAir2Child2} />
      <div className={styles.div1}>
        <span className={styles.span}>+</span>
        <span>{` `}</span>
      </div>
      <div className={styles.add}>Add</div>
      <Link className={styles.save} to="/macbook-air-3" onClick={onSaveClick}>
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

export default MacBookAir2;
