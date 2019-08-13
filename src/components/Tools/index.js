import React from 'react';
import styles from './styles.scss';
import BlockContent from '../BlockContent';
import Divider from '../Divider';
import Button from '../Button';
import Letter from '../Letter';


import data from './resource.jsx';

function Tools() {

  const genCoreValue = (image, header, body) => {
    return (
      <div className={`${styles["text-center"]}`}>
        <img src={image} style={{maxWidth: "236px", marginBottom: "25px"}}/>
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    );
  };

  return (
    <div>
      <BlockContent fullscreen={true} background={'pmts.png'}>
        <h1 style={{color: "white"}}>
          Pi Sigma Epsilon
        </h1>
        <h3 className={styles["text-center"]} style={{color: "white"}}>
          UC Berkeley’s Marketing & Business Fraternity
        </h3>
        <Button overrideStyles={{fontWeight: "500", marginTop:"64px"}} background="light">Fall Rush 2019</Button>
      </BlockContent>
      <BlockContent widthStyle="loose">
        <Letter dataIDs={data.letter.dataIDs} data={data.letter.data}/>
      </BlockContent>
      {/*<BlockContent>
        <h2>
          Who We Are
        </h2>
        <Divider size="small"/>
        <p className={styles["text-center"]}>
          The Zeta Chi chapter of Pi Sigma Epsilon was founded at the University of California, Berkeley in 2013. Our chapter endeavors to epitomize the goals of the fraternity in each and every member through various events focused around developing professionalism, confidence, leadership, and networking abilities. We currently consist of 49 members, representing a variety of majors and career paths.
        </p>
      </BlockContent>*/}
      <BlockContent fullscreen={true} background={'satherGate.png'}>
        <h1 style={{color: "white"}}>
          Our Values
        </h1>
        <h3 className={styles["text-center"]} style={{color: "white"}}>
          Here at Pi Sigma Epsilon, we are committed to three fundamental values.
        </h3>
      </BlockContent>
      <BlockContent>
        <div className={`${styles["row"]}`}>
          {data.values.map((value, i) => {
            return (
              <div className={`${styles["col-4"]}`} key={i}>
                {genCoreValue(value.image, value.header, value.body)}
              </div>
            )
          })}
        </div>
        <Button overrideStyles={{fontWeight: "Bold", marginTop: "50px"}}>LEARN MORE</Button>
      </BlockContent>
      <BlockContent fullscreen={true} background={'citySunset.png'}>
        <h1 style={{color: "white"}}>
          Where We Go
        </h1>
      </BlockContent>
      <BlockContent>
        <Button overrideStyles={{fontWeight: "Bold"}}>OUR CAREERS</Button>
      </BlockContent>
    </div>
  );
}

export default Tools;
