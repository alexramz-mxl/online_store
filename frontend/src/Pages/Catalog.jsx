import Product from "../components/Product"
import "./Catalog.css"

function Catalog(){
    
    const products = [
    { 
        title: "Mouse",
        price: 15,
        image: "mouse.jpg",
        category: "accesories",
        _id:"1"
    },
    {
        title: "Keyboard",
        price: 30.0,
        image: "keyboard.JPG",
        category: "accesories",
        _id:"2"
    },
    {
        title: "Monitor",
        price: 350.0,
        image: "monitor.jpg",
        category: "accesories",
        _id:"3"
    },
    {
        title: "ApexDesk Flex",
        price: 649.0,
        image: "apexdesk.jpg",
        category: "accesories",
        _id:"4"
    },
    {
        title: "Mouse Pad",
        price: 25.0,
        image: "mousepad.jpg",
        category: "accesories",
        _id:"5"
    },
    {
        title: "Router",
        price: 157.0,
        image: "router.jpg",
        category: "accesories",
        _id:"6"
    },
    {
        title: "SSD",
        price: 50.00,
        image: "SSD.jpg",
        category: "accesories",
        _id:"7"
    },
    {
        title: "RAM",
        price: 99.00,
        image: "ram.png",
        category: "accesories",
        _id:"7"
    },
];    
    return(
        <div className="catalog">
            <h2>CHECK OUR AMAZING CATALOG!</h2>

            <div className="products">
                { products.map( prod => <Product key={prod._id} data = {prod}/>)}
            </div>
        </div>
    );
}

export default Catalog;