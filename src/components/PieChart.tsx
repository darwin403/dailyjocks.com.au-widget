import { useState } from "react";
import { PieChart as RMPieChart } from "react-minimal-pie-chart";
import MouseTooltip from "react-sticky-mouse-tooltip";

import styles from "./PieChart.module.scss";

interface IProps {
  data: { title: string; value: number; color: string; hoverColor: string }[];
}

export const PieChart: React.FC<IProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const data = props.data.map((d, i) =>
    i === activeIndex ? { ...d, color: d["hoverColor"] } : d
  );

  return (
    <>
      {activeIndex !== undefined && (
        <MouseTooltip
          visible={true}
          offsetX={15}
          offsetY={10}
          className={styles.tooltip}
        >
          <b className={styles.title}>{data[activeIndex]["title"]}</b>
          <p className={styles.description}>
            New undies every {data[activeIndex]["value"]} days
          </p>
        </MouseTooltip>
      )}
      <RMPieChart
        label={({ dataEntry }) => dataEntry["title"]}
        data={data}
        labelStyle={{
          fontSize: "3px",
          fontFamily: "Zurich ,'sans-serif'",
          fill: "#212529",
          opacity: 0.75,
          pointerEvents: "none",
        }}
        segmentsShift={(index) =>
          activeIndex !== undefined && index === activeIndex ? 2 : 1
        }
        radius={40}
        labelPosition={75}
        lineWidth={50}
        animate={true}
        segmentsStyle={{ transition: "stroke 500ms", cursor: "pointer" }}
        style={{ height: "550px", padding: "10px" }}
        onMouseOver={(_, i) => {
          setActiveIndex(i);
        }}
        onMouseOut={() => {
          setActiveIndex(undefined);
        }}
      />
    </>
  );
};

export default PieChart;
