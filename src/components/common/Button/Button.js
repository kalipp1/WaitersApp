import styles from './Button.module.scss';

const Button = props => {
    return(
        <button className={styles.button} onClick={props.action}>{props.content}</button>
    );
};

export default Button;