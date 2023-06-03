import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import tastyKitchensLogo from '../Gallery/TastyKitchens.png'

import './index.css'

class Header extends Component {
  state = {
    showNavItems: false,
  }

  toggleNavItemsView = () => {
    this.setState(preState => ({
      showNavItems: !preState.showNavItems,
    }))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  getClassNameFor = path => {
    const {match} = this.props
    const currentPath = match.path
    if (currentPath === path) {
      return 'nav-item-selected-link'
    }
    return 'nav-item-link'
  }

  renderNavItemsContainer = mobile => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length
        return (
          <ul className={`nav-items-container${mobile}`}>
            <li className="nav-item">
              <Link className={this.getClassNameFor('/')} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={this.getClassNameFor('/cart')} to="/cart">
                Cart
                {cartItemsCount > 0 && (
                  <span className="cart-count-badge">{cartList.length}</span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="logout-button"
                type="button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </li>

            <button
              className="nav-button"
              type="button"
              onClick={this.toggleNavItemsView}
            >
              <AiFillCloseCircle className="close-icon" />
            </button>
          </ul>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    const {showNavItems} = this.state
    return (
      <nav className="navbar">
        <div className="logo-hamburger-container">
          <Link className="website-logo-container" to="/">
            <img
              className="website-logo"
              src={tastyKitchensLogo}
              alt="website logo"
            />
            <h1 className="website-title">Tasty Kitchens</h1>
          </Link>

          <button
            type="button"
            className="nav-button"
            onClick={this.toggleNavItemsView}
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
        {this.renderNavItemsContainer('')}
        {showNavItems && this.renderNavItemsContainer('-mobile')}
      </nav>
    )
  }
}

export default withRouter(Header)
