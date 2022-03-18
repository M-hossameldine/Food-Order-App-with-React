import { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

import styles from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const transformedMeals = (loadedMeals) => {
  let meals = [];

  return meals;
};

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-1-d0058-default-rtdb.firebaseio.com/meals.json'
      );

      const resoponseDate = await response.json();
      console.log('loaded meals', resoponseDate);

      const loadedMeals = [];

      for (let key in resoponseDate) {
        loadedMeals.push({
          id: key,
          name: resoponseDate[key].name,
          description: resoponseDate[key].description,
          price: resoponseDate[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
