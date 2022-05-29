import { Map, Chart, Bonus } from "../components";

export const Home = () => {
  return (
    <div style={{ paddingBottom: "2em" }}>
      <Map />
      <Chart />
      <Bonus />
    </div>
  );
};

export default Home;
