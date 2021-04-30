import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe= price*100;
    const publishableKey= 'pk_test_51Ik0mrSD8bwDBWHrcuLhEw1SplU6dPi2Jil1c8EgUFkrw7YP5QiL23pNCP80pshnqCa3otkAgJUfdIzGWkRUi2y700A1LzYvdd';
    
    const onToken = token => {
        console.log(token)
        alert('payment succesfull')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='ecomapp lmt'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={ `your total is $${price}` }
        amount= {priceForStripe}
        panelLabel= 'Pay Now'
        token={onToken}
        stripeKey= {publishableKey}
        />

    )
}
export default StripeCheckoutButton;