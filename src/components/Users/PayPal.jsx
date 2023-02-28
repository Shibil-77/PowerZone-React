import React from "react";
import ReactDOM from "react-dom"
import { bookingApi } from '../../api/portApi'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PayPal({rate,value,timeData, id}) {
  const navigate =  useNavigate()
   const  onBooking = ()=>{
      const res = bookingApi(timeData, value, id)
        if(res){
          toast.success('Booking SuccessFully completed', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          setTimeout(()=>{
            navigate('/')
          },3000)
       
        }
    }


    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: rate,
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
        <ToastContainer/>
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => {
            onApprove(data, actions)
            onBooking()
           
          }}
        />
          </div>
      );
}

export default PayPal