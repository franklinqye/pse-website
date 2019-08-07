import React from 'react';
import styles from './styles.scss';

function Divider(props) {
  const { size } = props;

  return (
    <div className={`${styles["divider"]} ${styles[size]}`}></div>
  );
}

export default Divider;
