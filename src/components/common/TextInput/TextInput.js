import styles from './TextInput.module.scss';

const TextInput = props => {
    return(
        <input className={styles.textInput} type='text' value={props.value} onChange={props.action} />
    );
};

export default TextInput;

// {clsx(styles.textInput, props.className)}