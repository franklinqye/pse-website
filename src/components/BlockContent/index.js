import React from 'react';
import styles from './styles.scss';

function BlockContent(props) {
  const { children, fullscreen, background, widthStyle } = props;

  const styleObj = {};
  if (background) {
    styleObj["backgroundImage"] = `url(${background})`;
    styleObj["height"] = "100%"; /* You must set a specified height */
    styleObj["backgroundPosition"] = "center"; /* Center the image */
    styleObj["backgroundRepeat"] = "no-repeat"; /* Do not repeat the image */
    styleObj["backgroundSize"] = "cover";
  }

  const centerClassName = `${styles["d-flex"]} ${styles["flex-column"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`;

  var innerClassName = centerClassName;
  if (widthStyle === "loose") {
    innerClassName += ` ${styles["loose"]}`;
  } else {
    innerClassName += ` ${styles["container"]}`;
  }

  var coreContent = (
    <div 
      className={`${centerClassName} ${styles["background"]} ${fullscreen && styles["fullscreen"]} ${background && styles["bg-tint"]} `}
      >
      <div className={innerClassName}>
        { children }
          </div>
    </div>
  );

  if (background) {
    coreContent = (
      <div style={ styleObj }>
        { coreContent }
      </div>
    )
  }

  return coreContent;
}

export default BlockContent;
