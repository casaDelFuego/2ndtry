import React from 'react';
import { useMachine } from '@xstate/react';
import { vendingMachine } from './VendingMachine';

export const VendingMachineUI = () => {
  const [selectedProduct, setSelectedProduct] = React.useState({});
  const [change, setChange] = React.useState(0);

  const [state, send] = useMachine(vendingMachine, {
    // this could be a real api request
    services: {
      loadProducts: async () => {
        return state.context.products
      }
    }
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    send({ type: 'SELECT_PRODUCT', selectedProduct: product });
  };

  const handleCoinInsert = (value) => {
    const newValue = state.context.amount + value;
    send({ type: 'INSERT_COIN', amount: parseFloat(newValue.toFixed(2)) });
  };

  const handleReturnFunds = () => {
    setChange(state.context.amount);
    send({ type: 'RETURN_FUNDS', amount: 0 });
  }

  return (
    <>
      <h1 className="state">{JSON.stringify(state.value)}</h1>
      <div className="main">

        <div className="wrapper--products">
          {/* map all products */}
          {(!state.matches('dispensingProduct') || !state.matches('returnChange')) && state.context.products.map((product) => (
            <button
              key={product.name}
              className={`
                product-card
                ${state.matches('dispensingProduct') && product.id === selectedProduct.id && 'product-card--dispense'}
              `}
              onClick={() => handleProductClick(product)}
            >
              <h3>{product.name}</h3>
              <div className={`product-card__image product-card__image--${product.id}`}/>
              {
                product.outOfStock ? (<h3 className="out-of-stock">Out of stock</h3>) : (<h3>{product.price}</h3>)
              }
            </button>
          ))}
        </div>

        {/* insert coin interface */}
        <div className="right-side">

          <h3 style={{marginTop: 0}}>Insert coins</h3>
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

          <h2>You inserted: <br/><b>{state.context.amount}</b></h2>
          <button className="cancel" onClick={handleReturnFunds}>Cancel</button>

          {/* feedback messages */}
          <div className="wrapper--feedbackMessages">
            {state.matches('oosMessage') && <h1 className="error">Out of stock</h1>}
            {state.matches('noFundsMessage') && <h1 className="error">Insufficient funds</h1>}
            {state.matches('fundReturnedMessage') && <h1 className="success">Your {change} was returned</h1>}
            {state.matches('dispensingProduct') && (<div className={`product-card__image product-card__image--${selectedProduct.id}`}/>)}
            {state.matches('returnChange') && (<h1 className="success">Here is your {state.context.change} change!</h1>)}
            {state.matches('thankYouPage') && <h1 className="success">Thank You! Come Again!</h1>}
          </div>
        </div>

      </div>
    </>
  );
};