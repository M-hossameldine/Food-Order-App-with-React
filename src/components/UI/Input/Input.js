import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}> {props.label} </label>
      <input {...props.input} onChange={props.inputChange} />
    </div>
  );
};

export default Input;
