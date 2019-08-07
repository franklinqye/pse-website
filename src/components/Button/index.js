import React from 'react';
import styles from './styles.scss';

function Button(props) {
  const { children, link="#", background="dark", overrideStyles={} } = props;

  return (
    <a 
      className={`${styles["parent"]} ${styles[background]}`} 
      href={link}
      style={overrideStyles}
      >
      { children }
    </a>
  );
}

export default Button;
