import React from 'react';
import styles from './styles.scss';
import BlockContent from '../BlockContent'

function Tools() {
  return (
    <div>
      <BlockContent fullscreen={true} background={'banquetS19.png'}>
        <h1 style={{color: "white"}}>
          Pi Sigma Epsilon
        </h1>
        <h3 className={styles["text-center"]} style={{color: "white"}}>
          UC Berkeley’s Marketing & Business Fraternity
        </h3>
      </BlockContent>
      <BlockContent>
        <h2>
          Who We Are
        </h2>
        <p className={styles["text-center"]}>
          The Zeta Chi chapter of Pi Sigma Epsilon was founded at the University of California, Berkeley in 2013. Our chapter endeavors to epitomize the goals of the fraternity in each and every member through various events focused around developing professionalism, confidence, leadership, and networking abilities. We currently consist of 49 members, representing a variety of majors and career paths.
        </p>
      </BlockContent>
      <BlockContent fullscreen={true} background={'satherGate.png'}>
        <h1 style={{color: "white"}}>
          Our Values
        </h1>
        <h3 className={styles["text-center"]} style={{color: "white"}}>
          Here at Pi Sigma Epsilon, we are committed to three fundamental values.
        </h3>
      </BlockContent>
    </div>
  );
}

export default Tools;
