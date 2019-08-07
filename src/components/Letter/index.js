import React from 'react';
import styles from './styles.scss';

function Letter(props) {
  const { dataIDs=[], data={} } = props;

  const genLetterText = (data, key) => (
    <div className={`${styles["col-12"]}`} style={Object.assign({}, data.style)} key={key}>
      <p>{data.text}</p>
    </div>
  );

  return (
    <div className={`${styles["row"]}`}>
      <div className={`${styles["col-4"]} ${styles["letterImageContainer"]}`}>
        <img src={'prez.png'} className={`${styles["letterImage"]}`}/>
      </div>
      <div className={`${styles["col-8"]}`}>
        {dataIDs.map((id, i) => {
          return genLetterText(data[id], i);
        })}
      </div>
    </div>
  );
}

export default Letter;
