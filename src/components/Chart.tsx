import { PieChart } from "./PieChart";
import styles from "./Chart.module.scss";
import { stateData, countryData } from "../data/chart";

export function Chart() {
  return (
    <section style={{ backgroundColor: "#F8F9FA" }}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1 className={styles.header}>
              Which state buys new underwear most often?
            </h1>
            <p className={styles.description}>
              Tasmanians are taking the lead in the Australian underwear
              rankings, buying new undies every 50 days! Meanwhile, those in the
              Northern Territory falling behind with new undies being delivered
              every 131 days. We might be biased, but with the humidity in the
              top end, we think this needs to be improved!
            </p>
            <PieChart data={stateData} />
          </div>
          <div className={styles.column}></div>
          <div className={styles.column}>
            <h1 className={styles.header}>
              Australia vs the rest of the world
            </h1>
            <p className={styles.description}>
              Second place isn't bad, Australia. Much better than some countries
              (we're looking at you, New Zealand) don't worry if you aren't
              buying new jocks as often as everyone else on the list, we have a
              huge range of underwear with free shipping Australia wide (so no
              more excuses NT!).
            </p>
            <PieChart data={countryData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chart;
