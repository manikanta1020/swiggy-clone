import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="empty-cart-container">
    <img
      src="https://res.cloudinary.com/sravangunaganti/image/upload/v1653301939/TastyKitchens/OBJECTS_rqxtrj.png"
      alt="empty cart"
      className="empty-cart-image"
    />
    <h1 className="no-order-heading">No Order Yet!</h1>
    <p className="no-order-text">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
