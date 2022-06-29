import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {
    const [productArray, setproductArray] = useState([])

    useEffect(() => { fetchProducts() }, [])

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setproductArray(json))
    }

    return (
        <div className="row mx-auto justify-content-center">
            {productArray.map((item, i) => {
                return (
                    <Link to={`/product/${item.id}`} key={item.id} className='card col-3 m-2 text-decoration-none text-muted'>
                        <img src={item.image} className='w-75 mx-auto' style={{height:'250px'}} alt="" />
                            <div className="card-body" key={item.id}>
                                <p className="fw-normal fs-6" style={{height:'50px'}}>{item.title}</p>
                            <p className="fw-normal">{item.category}</p>
                            <p className="text-success fw-normal">{item.price} EGP</p>
                            <button className="btn btn-warning">Add to Cart</button>
                            </div>
                    </Link>
                )
            })}
            </div>

    );
}
export default Products;