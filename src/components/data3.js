import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/data3.css"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const Data3 = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState();
    const prod = async () => {
        try {
            const result = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790039/React%20Class/Saikiran%20Naidu/deals_gqozem.json");
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
            <h1>Flash Deal</h1>
            <div className="data3Container">
                {data &&
                    data.map((e) => {
                        console.log(e);
                        return (
                            <div>

                                {/* <h1>{e.price}</h1> */}
                                <img src={e.pictures[0].url} className="data3Img" />
                                <p>{e.name},{e.price}</p>
                                {/* {e.pictures[2] && <img src={e.pictures[2].url} className="data1Img" />} */}
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}
export default Data3;