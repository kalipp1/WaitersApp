import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

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
                    <button className={styles.showMoreBTN}>Show more</button>
                </article>
            )}
        </section>
      </div>
    );
  };

  export default Home;