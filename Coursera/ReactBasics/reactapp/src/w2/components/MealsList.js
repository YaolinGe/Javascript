import {useMealsListContext} from "./MealsProvider";

const MealsList = () => {
    const {meals} = useMealsListContext();
    
    return (
        <div>
            <h1>Meals list using Context APi</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}