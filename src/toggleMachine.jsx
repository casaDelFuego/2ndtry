import { createMachine } from 'xstate';

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDcwDsIEs1QLIEMBjAC2zADpMIAbMAYgGUBRAGSYGEAVAfQAUAlAPIARAKpcA2gAYAuolAAHAPaxMAF0xK08kAA9EAVgAcAZnIA2AEwB2c1ICMVkweeWANCACeiEyankXA2sATmDrI2CAFksjawBfOI9UDGw8IlI0CgUAJyVCOFUcOgBJADlmfh5cQVKmAE1pOSQQZVUNLR19BCN7a3JI6PNgg3Ne82tjD28ESwMDckspW1sh8etrE3MEpPQsHAISMnIcvILUunZBXF42TiY+UX52AAkAQWZGnVb1TW1mruMZistgcTkC7i8iB6-RCjki9kszmcjm2IGSezSh0y5CwsAU6EKUDoAHFigA1e4vV6lYlMT7Nb7tP6gLo2YLkdYmSImCZTRCLSwLexSYK+cxGFxSGwmVHo1IHDIUXH4tCEuj8JicR6lbicQTcYrCNj0xQqH4df78kIcjbc3mQmbBIzkHkTMJGKRGUwhWW7eXpI5KACuakEADMGGo8gBrdWa7W6-WG42yL5mpmdK3szl2gx8hDw8wLWbBKVzDYbKQGX0pfYB7HYWBBsNhzCETDoNQAMSDGFgca1-B1eoNRrpqYZ6d+mZm1pzPLzDucfQ25hMi0iwzsBki8VRaCUEDgOjldaxYDTbWnloQAFp7OyBpZzHYlsNbJF87ei1Jf1L7B6IoAdYUo1hiCpHFQtCXuazJ6IgkRGEW5iIbm+ZIuQsTcpEnqLCYCLVokaJ+meirHLk+SwISMEZjepjOhM6xhJY8KWMKwToSMLrWNhuFSPhsxgf6544pgeIEqkNHXiyCEQtMsyCssQQsVKwzwkJpGBiG4aRjGUkWjJCD2CYzrBDE-H8Qidi9Iu0xrshAxRDhwrisEGmYmRjbNq27adj2fb6XBrLOuWvihBuiLmPmBj2PM+HLC+iGbJEWwJHEQA */
  id: 'vendingMachine',
  initial: 'idle',
  context: {
    products: ['Coke', 'Pepsi', 'Sprite'], // add list of products to context
    amountInserted: 0,
    selectedProduct: '',
    change: 0
  },
  states: {
    idle: {
      on: {
        SELECT_PRODUCT: {
          target: 'processing',
          actions: 'setSelectedProduct'
        }
      },
      // render the list of products
      render: ({ context }) => (
        <>
          <h1>Products:</h1>
          <ul>
            {context.products.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </>
      )
    },
    processing: {
      on: {
        INSERT_MONEY: {
          actions: 'setAmountInserted',
          target: 'processing',
        },
        COMPLETE_PURCHASE: {
          target: 'dispensing'
        }
      }
    },
    dispensing: {
      onEntry: 'dispenseProduct',
      on: {
        GIVE_CHANGE: {
          actions: 'setChange',
          target: 'idle'
        },
        RETURN_TO_IDLE: {
          target: 'idle',
        },
      },
    },
    outOfStock: {
      on: {
        RETURN_TO_IDLE: {
          target: 'idle',
        },
      },
    },
    insufficientFunds: {
      on: {
        RETURN_TO_IDLE: {
          target: 'idle',
        },
      },
    },
  },
}, {
  actions: {
    dispenseProduct: (context, event) => {
      // Dispense the selected product
    },
    setSelectedProduct: assign({
      selectedProduct: (context, event) => event.product,
    }),
    setAmountInserted: assign({
      amountInserted: (context, event) => context.amountInserted + event.amount,
    }),
    setChange: assign({
      change: (context, event) => event.change,
    }),
  },
  guards: {
    productAvailableAndFundsSufficient: (context, event) => {
      // Check if the selected product is available and the user has inserted enough money
    },
    productUnavailable: (context, event) => {
      // Check if the selected product is out of stock
    },
    fundsInsufficient: (context, event) => {
      // Check if the user has inserted enough money for the selected product
    },
  },
});