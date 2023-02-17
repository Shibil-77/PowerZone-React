import React from 'react'
import './Checkout.css'
import PayPal from '../PayPal'


function CheckOut() {
  return (
  <div className='flex justify-center w-full'>
    

    <div className="iphone ">
  <header className="header">
    <h1>Checkout</h1>
  </header>

    {/* <div>
      <h2>Address</h2>

      <div className="card">
        <address>
          Adam Johnson<br />
          403 Oakland Ave Street, A city, Florida, 32104,<br />
          United States of America
        </address>
      </div>
    </div> */}


    <div>
      <h2>Shopping Bill</h2>

      <table>
        <tbody>
          <tr>
            <td>Shipping fee</td>
            <td align="right">$5.43</td>
          </tr>
          <tr>
            <td>Discount 10%</td>
            <td align="right">-$1.89</td>
          </tr>
          <tr>
            <td>Price Total</td>
            <td align="right">$84.82</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td align="right">$88.36</td>
          </tr>
        </tfoot>
      </table>
    </div>

    
    <fieldset>
      <legend>Payment Method</legend>
      <div className="form__radios">
      <PayPal/>
      </div>
    </fieldset>

    {/* <div>
      <button className="button button--full" type="submit"><svg className="icon">
          <use xlink:href="#icon-shopping-bag" />
        </svg>Buy Now</button>
    </div> */}
</div>
</div>
  )
}

export default CheckOut