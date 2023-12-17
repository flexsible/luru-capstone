import './ProductDetail.scss'

export default function ProductDetail() {

    return (
        
        <div className="product-wrapper__main">
            <div className="product-wrapper">
                <div className="product-image">
                    <img  src="https://media.istockphoto.com/id/92214686/photo/plate-of-french-food.jpg?s=612x612&w=0&k=20&c=Ox4HVs7RrY28BNn6bskKl5z0QeG2KPCrbsfDjyABzs0=" alt="Test" />
                </div>
                <div className="product-text">
                    <h4 className='product-text__title'>Sushi Flavour</h4>
                    <p className='product-text__address'>Jakarta, No 30 Street Bundaran</p>
                    <p className='product-text__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores aut, quis quo soluta ea. Quisquam nisi aliquid dolores facere?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quae eligendi corrupti minima dolor esse accusantium consectetur recusandae ducimus laudantium.</p>
                    <p className="product-text__price">
                        Rp.14999
                    </p>

                    <div className="product-button">
                        <button className='product-button__buynow'>Buy Now</button>
                        <button className='product-button__addtocart'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        

    )
}
