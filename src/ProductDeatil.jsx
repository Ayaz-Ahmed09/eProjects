import React,{useEffect,useState} from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
function ProductDeatil(){
  const { productID } = useParams();
    const [oneproduct1, setoneproduct1] = useState([]);
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramvalue = queryParams.get('productID');
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${paramvalue}`)
          .then((res) => res.json())
          .then((data) => {
            setoneproduct1(data);
          });
      }, []);
    return(
    <div>
      <Header/>
    <div className="loop-map space-y-6 bg-sky-200">
     <div className="font-bold justify-center text-3xl font-serif flex text-slate-950">{oneproduct1.title}</div>
    <div className="flex justify-center"> 
    <img className="h-[300px] w-auto border border-black hover:animate-pulse shadow-2xl shadow-slate-950" src={oneproduct1.image}/>
    </div>
     
        {/* <img src={oneproduct1.thumbnail}  />  */}
        <div className=" flex flex-wrap justify-center m-3 font-serif"><p className="font-bold text-2xl  text-slate-950">Description:</p> {oneproduct1.description}</div>
        <div className="font-bold text-3xl text-slate-950 flex justify-center font-serif">Price: ${oneproduct1.price}</div>
        </div>
        </div>
    )
}
export default ProductDeatil;