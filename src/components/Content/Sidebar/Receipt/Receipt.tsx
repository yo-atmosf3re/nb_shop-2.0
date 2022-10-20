import React from 'react'
import { ReceiptPropsType } from '../../../../@types/types'
import { divedesNumbers } from '../../../../utils/divedesNumbersIntoThousandths'

const Receipt: React.FC<ReceiptPropsType> = React.memo(({ totalPrice }) => {
   const totalCount = totalPrice === 0 ? 0 : divedesNumbers(totalPrice + 100 + 150);
   return (
      <div className="sidebar__receipt">
         <div className='receipt__container'>
            <div className="receipt__subtotal">
               <div className="subtotal__title">Subtotal</div>
               <div className="subtotal__price">$ {divedesNumbers(totalPrice)}</div>
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
               <div className="total__price">$ {totalCount}</div>
            </div>
         </div>
      </div>
   )
})

export default Receipt
