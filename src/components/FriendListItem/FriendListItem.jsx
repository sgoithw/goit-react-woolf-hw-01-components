import styles from './FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={styles.item}>
      <span
        className={clsx({
          [styles.status]: true,
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
