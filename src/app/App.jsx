import PageLayout from "./components/layouts/PageLayout";
import Advantage from "./components/ui/Advantage/Advantage";
import Header from "./components/ui/Header/HeaderComponent/Header";
import MainScreen from "./components/ui/MainScreen/MainScreenComponent/MainSreen";
import CarService from "./components/ui/CarService/CarService";
import Features from "./components/ui/Features/Features";
import CarModelsSlider from "./components/ui/CarModelsSlider/CarModelsSlider";
import Promotions from "./components/ui/Promotions/Promotions";
import Review from "./components/ui/Review/ReviewCopmonent/Review";
import AutoServiceMap from "./components/ui/AutoServiceMap/AutoServiceMapComponent/AutoServiceMap";
import Advice from "./components/ui/Advice/Advice";
import MobileApp from "./components/ui/MobileApp/MobileApp";
import Footer from "./components/ui/Footer/FooterComponent/Footer";

const App = () => {
  return (
    <>
      <Header />
      <PageLayout>
        <MainScreen />
        <Advantage />
        <CarService />
        <Features />
        <CarModelsSlider />
        <Promotions />
        <Review />
        <AutoServiceMap />
        <Advice />
        <MobileApp />
      </PageLayout>
      <Footer />
    </>
  );
};

export default App;
