import React,{useEffect,useState} from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
function ProductDeatil(){
 
    const [oneproduct1, setoneproduct1] = useState([]);
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramvalue = queryParams.get("productID");
  console.log(paramvalue, "jjsdjddjh");
    
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
    <div className="loop-map">
     <h1>{oneproduct1.title}</h1>
    <div className="array"> {oneproduct1.images && oneproduct1.images.map((img, index) => (
          <img src={img} alt={`Product Image `} />
        ))}</div>
     
        {/* <img src={oneproduct1.thumbnail}  />  */}
        <p>Description: {oneproduct1.description}</p>
        <h1>Price: ${oneproduct1.price}</h1>
        </div>
        </div>
    )
}
export default ProductDeatil;