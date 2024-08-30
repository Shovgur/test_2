import React, { useState } from 'react';
import gsap from 'gsap';
import TimePeriod from '../TimePeriod/TimePeriod';
import EventSlider from '../EventSlider/EventSlider';
import styles from './Timeline.module.scss';

const periods = [
  { id: 1, label: 'Period 1', events: ['Event 1.1', 'Event 1.2'] },
  { id: 2, label: 'Period 2', events: ['Event 2.1', 'Event 2.2'] },
];

const Timeline: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(periods[0]);

  const handlePeriodChange = (period: typeof periods[0]) => {
    gsap.to(`.${styles.slider}`, { opacity: 0, duration: 0.5 }).then(() => {
      setActivePeriod(period);
      gsap.to(`.${styles.slider}`, { opacity: 1, duration: 0.5 });
    });
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.periods}>
        {periods.map((period) => (
          <TimePeriod
            key={period.id}
            period={period}
            isActive={period.id === activePeriod.id}
            onClick={() => handlePeriodChange(period)}
          />
        ))}
      </div>
      <div className={styles.slider}>
        <EventSlider events={activePeriod.events} />
      </div>
    </div>
  );
};

export default Timeline;
