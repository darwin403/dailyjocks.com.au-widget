import { useState } from "react";
import { PieChart as RMPieChart } from "react-minimal-pie-chart";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { stateData } from "../data";

import styles from "./PieChart.module.scss";

interface IProps {
  data: {
    title: string;
    value: number;
    color: string;
    labelColor: string;
  }[];
}

export const PieChart: React.FC<IProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const getLabelStyle = (dataIndex: number) => ({
    fontSize: "3px",
    fontFamily: "Zurich ,'sans-serif'",
    fill: data[dataIndex]["labelColor"],
    opacity: 0.75,
  });

  const getSegmentShift = (dataIndex: number) =>
    activeIndex !== undefined && dataIndex === activeIndex ? 2 : 1;

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
        labelStyle={getLabelStyle}
        segmentsShift={getSegmentShift}
        radius={40}
        labelPosition={75}
        animate={true}
        style={{ maxHeight: "550px", padding: "10px", boxSizing: "border-box" }}
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
