import styles from './TextInput.module.scss';
import clsx from 'clsx';

const TextInput = props => {
    return(
        <input className={clsx(styles.textInput, props.className)} type='text' value={props.value} onChange={props.action} />
    );
};

export default TextInput;
