import cx from "classnames";
import styles from "./Bonus.module.scss";

const cardData = [
  {
    title: "69 Days",
    iconSrc: "/images/recycle-icon.svg",
    description: "Australians' who wear Briefs buy new undies most often.",
  },
  {
    title: "292 Days",
    iconSrc: "/images/calendar-icon.svg",
    description:
      "People who wear trunks & live in the ACT purchase new undies the least, with new jocks being delivered every 292 days.",
  },
  {
    title: "3rd Order",
    iconSrc: "/images/box-icon.svg",
    description: "Trunk owners often switch to briefs on their 3rd order.",
  },
  {
    title: "2 Pairs",
    iconSrc: "/images/trunks-icon.svg",
    description:
      "Jockstrap wearers buy the most when shopping for new undies. (Double the amount Trunk wearers buy).",
  },
];

interface ICardProps {
  title: string;
  iconSrc: string;
  description: string;
}
const Card: React.FC<ICardProps> = ({ title, iconSrc, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <img src={iconSrc} alt="Icon" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export const Bonus = () => {
  return (
    <section>
      {/* Header */}
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1 className={styles.header}>Bonus Underwear Facts</h1>
            <div className={styles.description}>
              Keen for more info you never knew you needed on Aussies’
              underwear? Keep reading to get the nitty-gritty on all of our
              dirty little secrets. They’re almost too cheeky (pun intended) to
              be true.
            </div>
          </div>
        </div>
      </div>

      {/* Small Screens only */}
      <div className={cx(styles.container, styles.smScreenOnly)}>
        <div className={styles.row}>
          {cardData.map((card, i) => (
            <div className={styles.column} key={i}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop screens only */}
      <div className={cx(styles.container, styles.lgScreenOnly)}>
        <div className={styles.row}>
          <div className={styles.column}>
            <Card {...cardData[0]} />
          </div>
          <div className={styles.column}>
            <Card {...cardData[1]} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.underwearWrapper}>
              <img
                className={styles.line}
                style={{
                  left: 0,
                  transform: "translate(-28%, -120%)",
                }}
                src="/images/line.svg"
                alt="Underwear Line"
              />
              <img
                className={styles.line}
                style={{
                  right: 0,
                  transform: "translate(28%, -120%) scaleX(-1)",
                }}
                src="/images/line.svg"
                alt="Underwear Line"
              />
              <img
                src="/images/underwear.webp"
                alt="Underwear Model"
                className={styles.underwear}
              />
              <img
                className={styles.line}
                style={{
                  left: 0,
                  bottom: 0,
                  transform: "scaleY(-1) translate(-28%, -120%) ",
                }}
                src="/images/line.svg"
                alt="Underwear Line"
              />
              <img
                className={styles.line}
                style={{
                  bottom: 0,
                  right: 0,
                  transform: "translate(28%, 120%) scale(-1,-1)",
                }}
                src="/images/line.svg"
                alt="Underwear Line"
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <Card {...cardData[2]} />
          </div>
          <div className={styles.column}>
            <Card {...cardData[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
