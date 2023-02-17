import React from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PayPal({rate}) {
    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "1",
              },
            },
          ],
        });
      };
      const onApprove = (data, actions) => {
        return actions.order.capture()
      };
      return (
        <div>

        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => {
            onApprove(data, actions)
            console.log("============5===========5==========5=55555555555=5");
          }}
        />
          </div>
      );
}

export default PayPal