const getPrices = require('./finalProject').getPrices;
const getDiscount = require('./finalProject').getDiscount;

test('getPrices() should print the prices of the dishes with tax', () => {
    const spy = jest.spyOn(console, 'log');
    getPrices(true);
    expect(spy).toHaveBeenCalledWith('Dish:', 'Italian Pasta', 'Price: $11.46');
    expect(spy).toHaveBeenCalledWith('Dish:', 'Rice with veggies', 'Price: $10.38');
    expect(spy).toHaveBeenCalledWith('Dish:', 'Chicken with potatoes', 'Price: $18.66');
    expect(spy).toHaveBeenCalledWith('Dish:', 'Vegetarian Pizza', 'Price: $7.74');
    spy.mockRestore();
});
