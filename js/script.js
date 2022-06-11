class Admin {
  constructor(name) {
    this.name = name;
  }
}

class Donor {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

class Charity {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Post {
  constructor(food, restrictions, date, weight, picture) {
    this.food = food;
    this.restrictions = restrictions; //vegetarian, kosher, halal, nutfree, glutenfree
    this.date = date;
    this.weight = weight; //kilograms
    this.picture = picture;
  }
}

var postList = [
  new Post("Raw Beef", ['kosher', 'halal', 'nutfree', 'glutenfree'], 'June 11', 3, 'product-1.jpg'),
  new Post("Bananas", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 9', 5, 'product-2.jpg'),
  new Post("Guava Fruit", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 8', 4, 'product-3.jpg'),
  new Post("Blueberries", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'May 21', 6, 'product-4.jpg'),
  new Post("Hamburger", ['kosher', 'halal', 'nutfree', 'glutenfree'], 'June 11', 10, 'product-5.jpg'),
  new Post("Mango", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 9', 1, 'product-6.jpg'),
  new Post("Watermelon", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 5', 3, 'product-7.jpg'),
  new Post("Apple", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 6', 0.5, 'product-8.jpg'),
  new Post("Dried Passionfruit", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 7', 7, 'product-9.jpg'),
  new Post("Fried Chicken Leg", ['kosher', 'nutfree', 'glutenfree'], 'June 8', 3, 'product-10.jpg'),
  new Post("Tropicana Orange Juice", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 9', 20, 'product-11.jpg'),
  new Post("Fruit Salad", ['kosher', 'halal', 'vegetarian', 'nutfree', 'glutenfree'], 'June 10', 2, 'product-12.jpg'),
];

/*
let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
console.log("My car is " + myCar.age(year) + " years old.");
*/

let weightSaved = 0;



const createGrid = function () {
  for (let i = 0; i < postList.length; i++) {
    obj = postList[i]
    let code = $($.parseHTML(`
    <div class="col-lg-3 col-md-4 col-sm-6 mix ${obj.restrictions.join(" ")}">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="img/product/${obj.picture}">
                                <ul class="featured__item__pic__hover">
                                    <li class="claimButton ${obj.weight} item${i}"><a href="javascript:void(0)"><i class="fa fa-heart"></i></a></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h5>${obj.food}</h5>
                                <h6>${obj.weight} Kilograms</h6>
                            </div>
                        </div>
                    </div>
    `))
    $(".featured__filter").append(code)
  }
}


$(document).on("click", ".claimButton", function() {
  let itemNum = parseInt(this.className.slice(-1))

})

createGrid()