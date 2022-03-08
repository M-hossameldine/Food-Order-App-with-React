import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import coverImg from '../../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={coverImg} alt='table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
