import React from 'react';
import styles from './styles.scss';

function BlockContent(props) {
  const { children, fullscreen, background } = props;

  const styleObj = {};
  if (background) {
    styleObj["backgroundImage"] = `url(${background})`;
    styleObj["height"] = "100%"; /* You must set a specified height */
    styleObj["backgroundPosition"] = "center"; /* Center the image */
    styleObj["backgroundRepeat"] = "no-repeat"; /* Do not repeat the image */
    styleObj["backgroundSize"] = "cover";
  }

  const centerClassName = `${styles["d-flex"]} ${styles["flex-column"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`;
  return (
    <div 
      className={`${centerClassName} ${styles["background"]} ${fullscreen && styles["fullscreen"]} `}
      style={ styleObj }
      >
      <div className={`${centerClassName} ${styles["container"]}`}>
        { children }
          </div>
    </div>
  );
}

export default BlockContent;
