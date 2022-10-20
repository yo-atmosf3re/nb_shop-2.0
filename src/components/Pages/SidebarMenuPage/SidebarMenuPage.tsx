import { useSelector } from 'react-redux';
import { RootState } from '../../../@types/types';
import SneakersCartFromMenu from './SneakersCartFromMenu/SneakersCartFromMenu';
import { divedesNumbers } from '../../../utils/divedesNumbersIntoThousandths';
import { Link } from 'react-router-dom';
import React from 'react';

const SidebarMenuPage = React.memo(() => {
   const { totalPrice, items } = useSelector((state: RootState) => state.items)
   const finalPrice = totalPrice === 0 ? 0 : divedesNumbers(totalPrice + 100 + 150);
   return (
      <div className="content__sidebarpage">
         <div className='sidebarpage__container'>
            <Link to={'/'}>
               <div className="sidebarpage__cross">
                  <svg width="24" height="23" viewBox="0 0 19 18" fill="none">
                     <path d="M10.756 9L18.7001 16.9629L17.6639 18L9.70834 10.0487L1.75274 18L0.716553 16.9629L8.66064 9L0.716553 1.03713L1.75274 0L9.70834 7.95134L17.6639 0L18.7001 1.03713L10.756 9Z" fill="#000000" />
                  </svg>
               </div>
            </Link>
            <div className="sidebarpage__mybaskets">
               <div className='sidebarpage__title'>My basket</div>
               <>
                  {
                     items.length !== 0
                        ? items.map(s => <SneakersCartFromMenu {...s} />)
                        : <div className='sidebarpage__emptycart'>Sorry, your cart is empty, please add some items!</div>
                  }
               </>
            </div>
            <div className="sidebarpage__receipt">
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
                     <div className="total__price"><>$ {finalPrice}</></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
})

export default SidebarMenuPage