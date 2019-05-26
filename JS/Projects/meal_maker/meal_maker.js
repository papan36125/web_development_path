menu={
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts:[],
    get appetizers(){
      return this._appetizers;
    },
    set appetizers(appetizerIn){
      this._appetizers.push(appetizerIn);
    },
    get mains(){
      return this._mains;
    },
    set mains(mainIn){
      this._mains.push(mainIn)
    },
    get desserts(){
      return this._desserts;
    },
    set desserts(dessertIn){
      this._desserts.push(mainIn)
    }
  },
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    dish = {
      name: dishName,
      price: dishPrice,
    }
    this._courses[courseName].push(dish);
  },
    getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`;
  }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'La la Salad', 4.65);
menu.addDishToCourse('appetizers', 'Na na Salad', 5.25);
menu.addDishToCourse('mains', 'Burger', 8.25);
menu.addDishToCourse('mains', 'Pizza', 9.65);
menu.addDishToCourse('mains', 'Noodles', 8.65);
menu.addDishToCourse('desserts', 'Ice Cream', 4.95);
menu.addDishToCourse('desserts', 'Chocolate moose', 4.85);
menu.addDishToCourse('desserts', 'Cheesecake', 5.35);

const meal = menu.generateRandomMeal();
console.log(meal);
