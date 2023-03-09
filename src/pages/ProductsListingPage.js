import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function ProductListingPage({ setString, string }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const APIURL = "http://127.0.0.1:5005";

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${APIURL}/products`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        setProducts(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      <h4 className="text-center products">Furniture</h4>
      <h6 className="text-center products">Old but gold!</h6>
      <div className="product-cards-container">
        {products
          .filter((product) => {
            console.log(product.title);
            return product.title.includes(string);
          })
          .map((product, i) => (
            <div key={i}>
              <Link to={"/products/" + product._id}>
                <ProductCard
                  key={product._id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  region={product.region}
                  user={product.user}
                />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductListingPage;
