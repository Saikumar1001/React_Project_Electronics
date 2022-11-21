import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/data1.css"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const Products = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState();
  const prod = async () => {
    try {
      const result = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790039/React%20Class/Saikiran%20Naidu/electronicDeal_kexbzw.json");
      setData(result.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    prod()
  }, [])

  return (
    <div>
      <h1>Electronics</h1>
      <div  className="data1Container">
      {data &&
        data.map((e) => {
          console.log(e);
          return (
            <div className="img">
              
              {/* <h1>{e.price}</h1> */}
              <img src={e.pictures[0].url} className="data1Img" />
              <p>{e.name},{e.price}</p>
              {/* {e.pictures[2] && <img src={e.pictures[2].url} className="data1Img" />} */}
            </div>
          );
        })}
    </div>
    </div>
  )
}
export default Products;