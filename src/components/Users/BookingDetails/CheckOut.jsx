import React from 'react'
import './Checkout.css'
import PayPal from '../PayPal'
import { useLocation } from 'react-router-dom'


function CheckOut() {
  const location = useLocation()
  const { value, timeData, id, portData } = location.state
  console.log(value, "value: ", timeData, "timeData: ", id, "id", portData);

  return (
    <div className='flex justify-center w-full'>
      <div className="iphone ">
        <header className="header">
          <h1>Checkout</h1>
        </header>
        <div>
          <h2>Shopping Bill</h2>

          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td align="right">{portData?.type}</td>
              </tr>
              <tr>
                <td>Time </td>
                <td align="right">{timeData}</td>
              </tr>
              <tr>
                <td>Rate</td>
                <td align="right">${portData?.rate}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td align="right">${portData?.rate}</td>
              </tr>
            </tfoot>
          </table>
        </div>


        <fieldset>
          <legend>Payment Method</legend>
          <div className="form__radios">
            <PayPal rate={portData?.rate} value={value} timeData={timeData} id={id} />
          </div>
        </fieldset>

      </div>
    </div>
  )
}

export default CheckOut