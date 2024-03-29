import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';
import Footer from '../Footer';

function App(props) {
  const { children } = props;
  return (
    <div>
      {/*NavBar*/}

      {children}

      <Footer/>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;


// function App({ children }) {
//   return (
//     <div>
//       <i className={styles.logo} />
//       <ul className={styles.nav}>
//         <li className={styles.navItem}>
//           <Link className={styles.link} to="/">
//             Home
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link className={styles.link} to="/tools">
//             Tools
//           </Link>
//         </li>
//       </ul>
//       <div className={styles.content}>
//         {children}
//       </div>
//     </div>
//   );
// }

// App.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default App;
