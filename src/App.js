import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import PaymentPage from "./Screens/User/PaymentPage";
import ShoppingCart from "./Screens/User/ShoppingCart/ShoppingCart";
import ShoppingCard from "./Components/ShoppingCard/ShoppingCard";
import ShoppingCardEmpty from "./Screens/User/ShoppingCart/ShoppingCardEmpty";
import ProductCard from "./Components/ProductsCard/ProductCard";
import RecentlyViewedProducts from "./Components/ProductsCard/RecentlyViewedProducts";
import Profile from "./Screens/User/Profile/Profile"

function App() {
  return (
    <MainContainer>
      {/* NavBar for all pages  */}
      <NavBar />
      {/* <HomeScreen/> */}
      {/* <PaymentPage
      number="65AS1D56ASD156DS"
      Address="56051 Jones Falls, Philippines, Turkey - 62502"
        Items="1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth Headset"
      /> */}
      {/* <ShoppingCart number={3} totalPrice={"$999.97"} dicCountPrice={"$989.97"} /> */}

      {/* <ShoppingCard /> */}
      <ShoppingCardEmpty />
      {/* <ProductCard item={"Canon Eos 80D DSLR Camera"} price={"$799.99"} /> */}
      {/* <RecentlyViewedProducts /> */}
      {/* <Profile /> */}
    </MainContainer>
  );
}

export default App;
