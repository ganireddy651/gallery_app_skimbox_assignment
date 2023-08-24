import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="heading-container">
      <hr className="line" />
      <h1 className="heading">Bundle & Save</h1>
      <hr className="line" />
    </div>
    <form>
      <div>
        <div className="pair1-container">
          <div className="radio-button-container">
            <input type="radio" id="onePair" className="pair1" name="offer" />
            <div className="label-container">
              <label htmlFor="onePair">1 Pair</label>
              <h1 className="price">DKK 195.0</h1>
            </div>
          </div>
          <p className="offer">50% off</p>
        </div>
        <div className="pair2-container">
          <div className="pair2-top-section">
            <div className="radio-button-two-container">
              <input
                type="radio"
                id="onePair"
                className="pair2"
                name="offer"
                checked
              />
              <div className="label-container">
                <label htmlFor="onePair">2 Pair</label>
                <h1 className="pair2-price">DKK 345.00</h1>
              </div>
            </div>
            <div className="strick-container">
              <span className="pair1-price-strick">DKK 195.00</span>
            </div>
            <div className="popular-container">
              <span className="most-popular">Most Popular</span>
              <p className="offer">40% off</p>
            </div>
          </div>
          <div className="dropdown-container">
            <div className="size-container">
              <p className="size">Size</p>
              <div>
                <span className="">#1</span>
                <select className="drop-down">
                  <option>S</option>
                </select>
              </div>
              <div>
                <span>#2</span>
                <select className="drop-down">
                  <option>S</option>
                </select>
              </div>
            </div>
            <div className="color-container">
              <div>
                <p className="color">Colour</p>
                <select className="color-drop-down">
                  <option>Colour</option>
                </select>
              </div>
              <select className="color-drop-down">
                <option>Colour</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pair1-container">
          <div className="radio-button-container">
            <input type="radio" id="threePair" className="pair1" name="offer" />
            <div className="label-container">
              <label htmlFor="threePair">3 Pair</label>
              <h1 className="price">DKK 528.00</h1>
            </div>
          </div>
          <p className="offer">60% OFF</p>
        </div>
        <div className="shipping-container">
          <h2 className="free-shipping">Free 2 Day Shipping</h2>
          <h2 className="total-price">
            Total : <span className="total-price-dkk">DKK 360.00</span>
          </h2>
        </div>
        <button type="button" className="add-to-cart-button">
          + Add to Cart
        </button>
        <p className="copy-right">&copy; Powered by Pumper</p>
      </div>
    </form>
  </div>
)

export default App
