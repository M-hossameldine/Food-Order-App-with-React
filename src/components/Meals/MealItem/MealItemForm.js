import { useState, useContext } from 'react';
import Input from '../../UI/Input/Input';
import CartContext from '../../../store/cart-context';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);
  const cartCtx = useContext(CartContext);
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('amount', enteredAmount);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        inputChange={amountChangeHandler}
        input={{
          id: `amount${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
