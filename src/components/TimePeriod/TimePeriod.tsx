import React from "react";
import styles from "./TimePeriod.module.scss";

interface TimePeriodProps {
  period: { id: number; label: string };
  isActive: boolean;
  onClick: () => void;
}

const TimePeriod: React.FC<TimePeriodProps> = ({
  period,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`${styles.timePeriod} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {period.label}
    </div>
  );
};

export default TimePeriod;
