import styles from './TablePage.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useEffect } from 'react';

const TablePage = () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTableById(state, tableId));
    const statusOptions = ['Free', 'Reserved', 'Busy', 'Cleaning'];

    return(
        <div>
            <section>
                <h1>{table.name}</h1>
            </section>
            <section>
                <p><b>Status:</b></p>
                <select value={table.Status}>
                    {statusOptions.map((status) => (
                    <option key={status} value={status}>
                    {status}
                    </option>
                    ))}
                </select>
            </section>
        </div>
    );
};

export default TablePage