import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantDetails = () => {
  const restaurantsId = useParams();
  console.log("Restaurant Id:> ", restaurantsId);

  const restaurants = [
    {
      id: "1",
      name: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townsville",
      rating: 4.2,
      description: "Savor the flavors of India with our traditional dishes.",
      menu: [
        { name: "Butter Chicken", price: "$14" },
        { name: "Paneer Tikka Masala", price: "$12" },
        { name: "Gulab Jamun", price: "$6" },
      ],
    },
    {
      id: "2",
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: 4.5,
      description: "Experience authentic Italian cuisine in a cozy atmosphere.",
      menu: [
        { name: "Spaghetti Carbonara", price: "$15" },
        { name: "Margherita Pizza", price: "$12" },
        { name: "Tiramisu", price: "$8" },
      ],
    },
    {
      id: "3",
      name: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 Oak Avenue, Villageland",
      rating: 4.9,
      description: "Fresh sushi and sashimi prepared by expert Japanese chefs.",
      menu: [
        { name: "Salmon Nigiri", price: "$10" },
        { name: "California Roll", price: "$9" },
        { name: "Miso Soup", price: "$5" },
      ],
    },
    {
      id: "4",
      name: "Taco Fiesta",
      cuisine: "Mexican",
      location: "321 Pine Road, Metrocity",
      rating: 4.3,
      description: "Authentic Mexican street food with bold flavors.",
      menu: [
        { name: "Chicken Tacos", price: "$8" },
        { name: "Beef Burrito", price: "$11" },
        { name: "Churros", price: "$6" },
      ],
    },
    {
      id: "5",
      name: "Dragon Wok",
      cuisine: "Chinese",
      location: "654 Maple Street, Chinatown",
      rating: 4.6,
      description: "Delicious Chinese dishes made with traditional recipes.",
      menu: [
        { name: "Kung Pao Chicken", price: "$13" },
        { name: "Vegetable Fried Rice", price: "$9" },
        { name: "Spring Rolls", price: "$7" },
      ],
    },
    {
      id: "6",
      name: "Burger Hub",
      cuisine: "American",
      location: "987 Cedar Lane, Uptown",
      rating: 4.1,
      description: "Juicy burgers and crispy fries served fresh every day.",
      menu: [
        { name: "Classic Cheeseburger", price: "$10" },
        { name: "BBQ Bacon Burger", price: "$12" },
        { name: "Onion Rings", price: "$5" },
      ],
    },
  ];

  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id === restaurantsId.restaurantsId
  );
  console.log("Restaurants Data:> ", restaurantData);

  if (!restaurantData) {
    return (
      <>
        <Header />
        <main className="container py-4">
          <h2>Restaurant Not Found</h2>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Header />
      <main className="container py-4">
        <h1>{restaurantData.name}</h1>
        <p>
          <strong>Cuisine:</strong> {restaurantData.cuisine}
        </p>
        <p>
          <strong>Location:</strong> {restaurantData.location}
        </p>
        <p>
          <strong>Rating:</strong> {restaurantData.rating}
        </p>
        <p>{restaurantData.description}</p>

        <h3>Menu</h3>
        <ul className="list-group">
          {restaurantData.menu.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};
export default RestaurantDetails;
