
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
const Dummy_Meals =[
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
  

function AvailableMeals(){
    const availableMeals = Dummy_Meals.map((meal)=>(
        <MealItem
        id= {meal.id}
        name= {meal.name}
        description={meal.description}
        price ={meal.price}
        />  
    ));

    return(
<section className={classes.meals}>
      <Card>
        <ul>
        {availableMeals}
        </ul>
      </Card>
    </section>

    );

}
export default AvailableMeals;