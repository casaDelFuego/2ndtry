import React from 'react';
import { useMachine } from '@xstate/react';
import { vendingMachine } from './VendingMachine';

export const VendingMachineUI = () => {
  const [state, send] = useMachine(vendingMachine, {
    services: {
      loadProducts: async () => {
        return state.context.products
      }
    }
  });

  const handleProductClick = (product) => {
    send({ type: 'SELECT_PRODUCT', selectedProduct: product });
  };

  const handleCoinInsert = (value) => {
    const newValue = state.context.amount + value;
    send({ type: 'INSERT_COIN', amount: parseFloat(newValue.toFixed(2)) });
  };

  const handleReturnFunds = () => {
    send({ type: 'RETURN_FUNDS', amount: 0 });
  }

  return (
    <>
      {/* {JSON.stringify(state.value)} */}
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
                  <h3 className="out-of-stock">Out of stock</h3>
                ) : (
                  <h3>{product.price}</h3>
                )
              }
            </button>
          ))}

        </div>
        <div className="right-side">
          <h3>insert coins</h3>
          <div className="wrapper--controls">
            {state.context.coins.map((coin) => (
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
          <button className="cancel" onClick={handleReturnFunds}>Cancel</button>
          <div className="wrapper--feedbackMessages">
            {state.matches('oosMessage') && <h1 className="error">Out of stock</h1>}
            {state.matches('noFundsMessage') && <h1 className="error">Insufficient funds</h1>}
            {state.matches('fundReturnedMessage') && <h1 className="success">Your {state.context.amount} was returned</h1>}
            {state.matches('dispensingProduct') && (<h1 className="success">Here is your {state.context.selectedProduct.name}</h1>)}
            {state.matches('returnChange') && (<h1 className="success">Here is your {state.context.change} change!</h1>)}
            {state.matches('thankYouPage') && <h1 className="success">Thank You! Come Again!</h1>}
          </div>
        </div>
      </div>

    </>
  );
};