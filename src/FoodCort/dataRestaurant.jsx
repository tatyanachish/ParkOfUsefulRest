import pizza from './photoFood/pizza.jpg';
import steak from './photoFood/steak.jpg';
import losTacos from './photoFood/lostakos.jpg';
import bakery from './photoFood/bakery.jpg';
import bowl from './photoFood/bowl.jpg';
import photoCoffee from './photoFood/photoCoffee.jpg'

export const dataRestaurant = [
    {
        id: 1,
        image: pizza,
        title: 'Pizza & Salad',
        searchTerm: ['pizza','hamburger', 'coffee', 'cold beverages','salad'],
        cusine: 'Pizza, pasta, hamburgers, coffee, cold beverages, salad',
        description:'Pizza is universal dish which is loved adult and children. Pizza & Salad serves pizza to customer freshly baked, without to use semi-finished products.The finished dish is served in special branded cardboard packaging.Salads made with the finest ingredients, many of them grown locally at own farm using the latest sustainable farming techniques, good for the environment and good for you. ',
        location: 'see map',
        showMore: false
    },
    {
        id: 2,
        image: steak,
        title: 'A Steakhouse',
        searchTerm: ['hamburger', 'coffee', 'cold beverages'],
        cusine: 'Steak, hamburgers, salad, coffee, cold beverages',
        description:'A Steakhouse offers a cozy, casual atmosphere where you can enjoy high-quality, perfectly cooked steaks alongside a variety of comforting café-style dishes. Perfect for a laid-back meal, it’s the ideal spot to savor delicious steaks paired with fresh sides, salads, and a good drink in a welcoming, informal setting.',
        location: 'see map',
        showMore: false
    },
    {
        id: 3,
        image: losTacos,
        title:'Los Tacos' ,
        searchTerm: ['hamburger', 'coffee', 'cold beverages'],
        cusine: 'Tacos, chips, salsa, burrito, hamburgers, cold beverages',
        description: 'A café with tacos, chips, salsa, and burritos offers a vibrant and casual dining experience with bold, fresh flavors. From soft, warm tacos filled with your choice of savory fillings to crispy tortilla chips served with zesty salsa, every bite is packed with authentic taste. It is the perfect spot for a laid-back meal with a delicious Mexican-inspired menu that brings together fresh ingredients and big, bold flavors in every dish.',
        location: 'see map',
        showMore: false
    },
    {
        id:4,
        image: bakery,
        title:'The Bakery',
        searchTerm: ['cake','coffee', 'cold beverages'],
        cusine: 'Cake, cookies, croissant, cannoli, coffee, tea, cold beverages',
        description:'A bakery is a warm, inviting space where the aroma of freshly baked goods fills the air. Offering a tempting array of treats, from golden-brown breads and flaky pastries to decadent cakes and cookies. It is a place where every item is made with care and quality ingredients. Our bakery promises comfort and indulgence in every bite.',
        location: 'see map',
        showMore: false
    },
    {
        id:5,
        image: bowl,
        title:'Sushi',
        searchTerm: ['coffee', 'cold beverages', 'salad'],
        cusine: 'Sushi, roll, soup, salad, shrimp, green tea, cold beverages',
        description: 'A sushi café combines the art of sushi-making with a relaxed, cozy café atmosphere. Serving up fresh, expertly crafted rolls, sashimi, and nigiri, it’s a place where traditional Japanese flavors meet casual dining.  Perfect for both sushi aficionados and newcomers alike, it is a vibrant spot for a delicious, healthy meal.',
        location: 'see map',
        showMore: false
    },
    {
        id:6,
        image: photoCoffee,
        title:'Coffee House',
        searchTerm: ['cake','coffee', 'cold beverages'],
        cusine: 'Cakes, pancakes, pies, cookies, croissant, cannoli, coffee, tea, cold beverages ',
        description: 'There is a cozy coffee shop in the greenhouse.For the little ones, the cafe offers a glass of warm milk, and for the hungriest, a hearty open pie with baked vegetables. In winter, spiced cocoa will help you warm up here, and in summer, homemade ice cream and sorbets.',
        location: 'see map',
        showMore: false
    }
]