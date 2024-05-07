import Products from "./Products.jsx";
import { CarouselDemo } from "./Carousel";
import Header from "./Header";
import Footer from "./Footer.jsx";
function App() {
  return (
    <>
      <div className="">
        <Header />
      </div>

      <div className="bg-slate-600 h-[500px] md:w-full">
        <p className="flex justify-center  pt-6 ">
          <CarouselDemo />
        </p>
      </div>
      <div className="">
        <p className='font-bold text-3xl font-sans'> PRODUCTS</p>
        <Products />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
