import { Button } from "@/components/ui/button";
import Products from "./Products.jsx";
import { CarouselDemo } from "./Carousel";
import Header from "./Header";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="bg-slate-600 h-[500px]">
        <p className="flex justify-center  pt-6 ">
          <CarouselDemo />
        </p>
      </div>
      <div className="">
        <p className='font-bold text-3xl font-sans'> PRODUCTS</p>
        <Products />
      </div>
    </>
  );
}

export default App;
