import React from 'react'

const Receipt = () => {
   return (
      <div className="sidebar__receipt">
         <div className='receipt__container'>
            <div className="receipt__subtotal">
               <div className="subtotal__title">Subtotal</div>
               <div className="subtotal__price">$ 1 850</div>
            </div>
            <div className="receipt__tax">
               <div className="tax__title">Tax</div>
               <div className="tax__price">$ 100</div>
            </div>
            <div className="receipt__shipping">
               <div className="shipping__title">Shipping</div>
               <div className="shipping__price">$ 150</div>
            </div>
            <div className="receipt__total">
               <div className="total__title">Total</div>
               <div className="total__price">$ 2 100</div>
            </div>
         </div>
      </div>
   )
}

export default Receipt
