import styles from './TablePage.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const TablePage = () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTableById(state, tableId));
    const statusOptions = ['Free', 'Reserved', 'Busy', 'Cleaning'];

    if(!table) return <Navigate to={"/"} />
    return(
        <div>
            <section className={styles.title}>
                <h1>{table.name}</h1>
            </section>
            <section>
                <div className={styles.status}>
                    <p><b>Status:</b></p>
                    <select value={table.Status}>
                        {statusOptions.map((status) => (
                        <option key={status} value={status}>
                        {status}
                        </option>
                        ))}
                    </select>
                </div>
                <div className={styles.people}>
                <p><b>People:</b></p>
                <input className={styles.peopleAmount} type='text' value={table.PeopleAmount} />/<input className={styles.peopleAmount} type='text' value={table.MaxPeopleAmount} />
                </div>
                <div className={styles.bill}>
                    <p><b>Bill: <span className={styles.dollar}>$</span></b></p>
                    <input className={styles.billInput} type='text' value={table.Bill} />
                </div>
                <button className={styles.updateBTN}>Update</button>
            </section>
        </div>
    );
};

export default TablePage