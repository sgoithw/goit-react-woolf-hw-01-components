import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  const randomColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  };

  return (
    <section class={styles.statistics}>
      {title && <h2 class={styles.title}>{title}</h2>}
      <ul class={styles.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li
            class={styles.item}
            style={{ backgroundColor: randomColor() }}
            key={id}
          >
            <span class={styles.label}>{label}</span>
            <span class={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
