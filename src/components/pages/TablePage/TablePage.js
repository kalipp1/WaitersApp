import styles from './TablePage.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const TablePage = () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTableById(state, tableId));
    const statusOptions = ['Free', 'Reserved', 'Busy', 'Cleaning'];
    const [peopleAmount, setPeopleAmount] = useState(table.PeopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.MaxPeopleAmount);
    const [bill, setBill] = useState(table.Bill);
    const [status, setStatus] = useState(table.Status);

    useEffect(() => {
        if (status === 'Free' || status === 'Cleaning') {
            setPeopleAmount('0');
        }
    }, [status]);
    useEffect(() => {
        if (status === 'Busy') {
            setBill('0');
            document.querySelector('.busyBillInfo').innerHTML ='Możesz edytować stan rachunku';
        } else if (status !== 'Busy') {
            document.querySelector('.busyBillInfo').innerHTML = '';
        }
    }, [status]);

    if(!table) return <Navigate to={"/"} />
    return(
        <div>
            <section className={styles.title}>
                <h1>{table.name}</h1>
            </section>
            <section>
                <div className={styles.status}>
                    <p><b>Status:</b></p>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        {statusOptions.map((status) => (
                        <option key={status} value={status}>
                        {status}
                        </option>
                        ))}
                    </select>
                </div>
                <div className={styles.people}>
                <p><b>People:</b></p>
                <input className={styles.peopleAmount} type='text' value={peopleAmount} onChange={(e) => setPeopleAmount(e.target.value)} />/<input className={styles.peopleAmount} type='text' min="1" 
                    max="10" value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(e.target.value)} />
                </div>
                <div className={styles.bill}>
                    <p><b>Bill: <span className={styles.dollar}>$</span></b></p>
                    <input className={styles.billInput} type='text' value={bill} onChange={(e) => setBill(e.target.value)} />
                    <p className='busyBillInfo'></p>
                </div>
                <button className={styles.updateBTN}>Update</button>
            </section>
        </div>
    );
};

export default TablePage