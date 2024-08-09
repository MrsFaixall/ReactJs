import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-600 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col ">
            {children}
        </div>
    );
};


const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img
                src={image}
                alt="product"
                className="p-4 rounded-t-lg" />
        </a>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name}
                </h5>
                <p className="text-s text-white ">
                    {children}
                </p>
            </a>
        </div>
    );
};
const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-4 pb-4">
            <span className="text-lg font-bold text-white">Rp. {price.toLocaleString('id-iD', { styles: 'currency', currency: "IDR" })}</span>
            <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;