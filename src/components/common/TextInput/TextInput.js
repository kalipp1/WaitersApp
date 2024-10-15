import styles from './TextInput.module.scss';

const TextInput = props => {
    <input className={styles.textInput} type='text' value={props.value} onChange={props.action} />
}

export default TextInput;