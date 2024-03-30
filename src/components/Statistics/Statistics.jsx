import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  const randomColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li
            className={styles.item}
            style={{
              backgroundColor: randomColor(),
              width: `${100 / stats.length}%`,
            }}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
