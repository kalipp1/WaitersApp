import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const tables = useSelector(getAllTables)
    return (
      <div>
        <h1>All tables</h1>
        <section className={styles.allTables}>
            {tables.map(table =>
                <article className={styles.singleTable}>
                    <div className={styles.info}>
                    <h3 className={styles.tableName}>{table.name}</h3>
                    <p className={styles.status}><b className={styles.onlyStatusTXT}>Status:</b>{table.Status}</p>
                    </div>
                    <Nav.Link as={NavLink} to={"/table/"+table.id}><button className={styles.showMoreBTN}>Show more</button></Nav.Link>
                </article>
            )}
        </section>
      </div>
    );
  };

  export default Home;