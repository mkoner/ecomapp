import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'


import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'


import './checkout.styles.scss'

const CheckoutPage= ({cartItems,total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>

            <div className='header-blocks'>
                <span>Product</span>
            </div>

            <div className='header-blocks'>
                <span>Description</span>
            </div>

            <div className='header-blocks'>
                <span>Quantity</span>
            </div>

            <div className='header-blocks'>
                <span>Price</span>
            </div>
        
            <div className='header-blocks'>
                <span>Remove</span>
            </div>
        </div>

        
        {
                    cartItems.map(item=>
                        <CheckoutItem key={item.id} cartItem={item}/>
                        ) 
                }

                <div className='total'>
                    <span>TOTAL: ${total}</span>
                </div>
        <div className='test-warning'>
             *Use the following credit card for test payments* <br/>
             4242 4242 4242 4242 Exp:01/24 cvv:123 
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)
const mapStateToProps= createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)