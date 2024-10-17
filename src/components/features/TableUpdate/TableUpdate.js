import styles from './TableUpdate.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateTable } from '../../../redux/tablesRedux';
import TextInput from '../../common/TextInput/TextInput';

const TablePage = () => {
    const { tableId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const table = useSelector(state => getTableById(state, tableId));
    const statusOptions = ['Free', 'Reserved', 'Busy', 'Cleaning'];
    const [peopleAmount, setPeopleAmount] = useState(table?.PeopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table?.MaxPeopleAmount);
    const [bill, setBill] = useState(table?.Bill);
    const [status, setStatus] = useState(table?.Status);

    useEffect(() => {
        if (status === 'Free' || status === 'Cleaning') {
            setPeopleAmount('0');
        }
    }, [status]);
    useEffect(() => {
        if (status === 'Free') {
            setBill('0');
        }
    }, [status]);
    useEffect(() => {
        if (status === 'Busy') {
            setBill('0');
            document.querySelector('.busyBillInfo').innerHTML ='You can edit bill value';
        } else if (status !== 'Busy') {
            document.querySelector('.busyBillInfo').innerHTML = '';
        }
    }, [status]);
    const handlePeopleAmount = (event) => {
        const value = event.target.value;
        if(value > maxPeopleAmount){
            setPeopleAmount(maxPeopleAmount);
        }else if(value < 0){
            setPeopleAmount(0);
        }else{
            setPeopleAmount(value);
        }
    }
    const handleMaxPeopleAmount = (event) => {
        const value = event.target.value;
        if(value > 10){
            setMaxPeopleAmount(10);
        }else if(value < 0){
            setMaxPeopleAmount(0);
            setPeopleAmount(0);
        }else{
            setMaxPeopleAmount(value);
            if(peopleAmount > value){
                setPeopleAmount(value);
            }
        }

    }
    const handleUpdate = () => {
        const updatedTable = {
            id: table.id,
            name: table.name,
            Status: status,
            PeopleAmount: peopleAmount,
            MaxPeopleAmount: maxPeopleAmount,
            Bill: bill,
        };
        dispatch(updateTable(updatedTable));
        navigate('/');
    };

    if(!table) return <Navigate to={"/"} />
    return(
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
                <input className={styles.peopleAmount} type='text' value={peopleAmount} onChange={handlePeopleAmount} />/<input className={styles.peopleAmount} type='text'
                    value={maxPeopleAmount} onChange={handleMaxPeopleAmount} />
                </div>
                <div className={styles.bill}>
                    <p><b>Bill: <span className={styles.dollar}>$</span></b></p>
                    <TextInput value={bill} action={(e) => setBill(e.target.value)} />
                    {/* <input className={styles.billInput} type='text' value={bill} onChange={(e) => setBill(e.target.value)} /> */}
                    <p className='busyBillInfo'></p>
                </div>
                <button className={styles.updateBTN} onClick={handleUpdate}>Update</button>
            </section>
    );
};

export default TablePage