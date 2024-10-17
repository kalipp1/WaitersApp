import styles from './TablePage.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import TableUpdate from '../../features/TableUpdate/TableUpdate';

const TablePage = () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTableById(state, tableId));
    return(
        <div>
            <section className={styles.title}>
                <h1>{table?.name}</h1>
            </section>
           <TableUpdate />
        </div>
    );
};

export default TablePage