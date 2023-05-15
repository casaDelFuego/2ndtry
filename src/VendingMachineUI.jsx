import React from 'react';
import { useMachine } from '@xstate/react';
import { vendingMachine } from './VendingMachine';

export const VendingMachineUI = () => {
  //const [customAmount, setCustomAmount] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState();
  const [state, send] = useMachine(vendingMachine, {
    services: {
      loadProducts: async () => {
        return state.context.products
      }
    }
  });


  const handleProductClick = (product) => {
    send({ type: 'SELECT_PRODUCT', selectedProduct: product });
    setSelectedProduct(product);
  };

  const handleCoinInsert = (value) => {
    const newValue = state.context.amount + value;
    send({ type: 'INSERT_COIN', amount: parseFloat(newValue.toFixed(2))});
  };

  const handleReturnFunds = () => {
    //setCustomAmount(state.context.amount);
    send({ type: 'RETURN_FUNDS', amount: 0});
  }

  return (
    <>
    {JSON.stringify(state.value)}
    {state.matches('oosMessage') && <h1>Out of stock</h1>}
    {state.matches('noFundsMessage') && <h1>Insufficient funds</h1>}
      <div className="main">
          <div className="wrapper--products">
            {(!state.matches('dispensingProduct') || !state.matches('returnChange')) && state.context.products.map((product) => (
              <button 
                key={product.name}
                className="product-card"
                // disabled={product.outOfStock}
                onClick={() => handleProductClick(product)}
              >
                <h3>{product.name}</h3>
                {
                  product.outOfStock ? (
                    <h6 className="out-of-stock">Out of stock</h6> 
                  ): (
                    <h6>{product.price}</h6>
                  )
                }
              </button>
            ))}
            
        </div>
        <div className="right-side">
          <h3>insert coins</h3>
          <div className="wrapper--cntrols">
            {state.context.coins.map((coin) =>(
              <button 
                key={coin.id}
                className="coin-btn"
                onClick={() => handleCoinInsert(coin.value)}
              >
                {coin.value}
              </button>
            ))}
          </div>
          <h2>you inserted: {state.context.amount}</h2>
          <button onClick={handleReturnFunds}>Cancel</button>
          {state.matches('fundReturnedMessage') && <h1>Your {state.context.amount} was returned</h1>}
          {state.matches('dispensingProduct') && (<h1>Here is your {state.context.selectedProduct.name}</h1>)}
          {state.matches('returnChange') && (<h1>Here is your {state.context.change} change!</h1>)}
          {state.matches('thankYouPage') && <h1>Thank You! Come Again!</h1>}   
          </div>
    </div>
    
    </>
  );
};