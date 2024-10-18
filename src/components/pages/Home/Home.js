import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../../common/Button/Button';

const Home = () => {
    const tables = useSelector(getAllTables)
    const [loading, setLoading] = useState(false);
    const [selectedTableId, setSelectedTableId] = useState(null);
    const navigate = useNavigate();
    const handleShowMore = (tableId) => {
        setLoading(true);
        setSelectedTableId(tableId);

        setTimeout(() => {
            navigate(`/table/${tableId}`);
        }, 2000);
    };
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
                    {loading && selectedTableId === table.id ? (
                        <div className={styles.loading}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <Button action={() => handleShowMore(table.id)} content={'Show more'} />
                    )}
                </article>
            )}
        </section>
      </div>
    );
  };

  export default Home;