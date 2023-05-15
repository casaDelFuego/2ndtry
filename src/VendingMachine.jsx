import { createMachine, assign } from 'xstate';

export const vendingMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDcwDsIEs1QLIEMBjAC2zADoAbAe3yxwGIJq0LtlqBrC1DbPIqVZVa9KAnbVC+AC6YWAbQAMAXWUrEoAA7VYmOS00gAHogC0AdgsAOcgGZrdgKzWl1mwBY7SgGwAaEABPcwBGJwAmJ3J3O28vJycATicfHwBfNIDeMQISMnJMCEowBgBJADkAZQBRACUAFQB9AGEAeQr1Ix09AzQjUwQLRJ9ycOsQ8LGxizsfOw8A4IQzEKUnD3InELnE8I8lEI8PJwsMrPQcwXzC4oYagBlq5qaABVrWgBEAVWfOpBBuvp5H1-gMzA4Ru4QtsPDZErs9nZFqElHtyD5jiFrO4fId0pkQNl+LkhGwiiUHk9Xu9vr8Qhp-oDev1zB5rOFyIlYg42SELCkMUiguYLOEQpylPCPD5EqKPIcPGdCRdiVdhDcKdVHs9Gm9Pj96gpwgztLogYZQeZxiMLNC1kMsRiscjlqsEuQlMdcWLZuE1oqCUScCTruSGLVqvUvrVyo0AGJfcofSp-U09YEshCrEZ2fme8a+GzhVIulZjHPYnzWRKo-Z2YtKoMCPLCQjUbCwUpoWBgABOMkgZSqdSabQ6qi6ZuZloQKSiSghdYs8pSQqWKyUbnIni27L5iX2p0DKuDaoobY7XZ7-cHxlgMlkFHwADMB72ABR+pQASgYTZDrbtt2V59gOECpgCU4ZjOey2M4gpjFizhKBYpaJGE5BHHm6xHK4diNiezakuQWCwFo6B6DgLy9tQEAAK6EDIDB3g+A7kC+b6fpuP5-oRAEUKR5Hdvw1G0QxMgQUy0GgAMITeOQYTZtYJyRBEiSlhiSijJKTgQvWdgHk4BF8KeLYCZgZEUSJNH0YxzH3o+7Gvn2XGbr+-5niRFlCZRUCibZEn0pO6YWjJ5h+ok0SxLCPhDHubhOBp4R2JhySOPsuy2tY+LnCZRH5M+dEYLUYAyHRvasBAuBwLA+AwPZrFPs5H7eG5vF5fx5CFcVpXlZV1WwLVMCSVBoUmIgsy2DMHh+iEXJVpM-jCq60K2I4nrodK1ZHEZx4dZ5aDUHGRUQLAA1DSULGORxLmrG1HlmeQh3HRgZ01XVYAjSFIJha6fqcuy8LOL6ykTKWExorKPh7DNXLDNCxmXI91C6OdH0NddzXvndPEPcRKNvYNH1feaP3jcs82jOhGK6VW1ZuOD8zigu4QWAcqLJBYMqI6qj29r1FXNMQ+A4JdDlsTdH44+5fGefzZWC8Losk9Ov1yRYHrcZ6cz8vySSltKWmxWyWx2KsckTDlyr7Y9MhK5wACa1B0S86NXRLWPS+1SPEXbIuO87rvDROjKjWTYKrDYox4QejjZb4iXLWYJwa7COKSj4STbLtuU+-kNB0PwDB9jRvbkFolCyM+1C9gAtuQeP56I-ASGgHDSL06gq9J5Nlp60Q2OMbMHLiMzg14IybspsXwrKB6JDzpnEbAxDUAA7tUvalxjHucU492y49K-r5vpfd2NEdjBsDiTHyezFrF1jg7pGxuGMsTJc4KTWBkBKHRAcAjCN1YMFUmmYVgf3sOyMUcoH42HBnMDkyRYbwznIvfKwgC5iFAarXubpIoTAmK1SUm54FJzCMcTCVZcToWLIcFw6DOoahwT3AYzgFLuGxNlcINZeHqXIRMLS8xlzbFin6YsAZc682IheYC3ZQKQBYRfRARwOSRFtH6HwaxIhPyTlzSKsE5jWCODKNwIRGGeUElZKiNlxJKPDogeE243CxE3NmbwcxSz6NGGyHY7M1g-z2nnYQ3UIAlQVv1d6MB7GZhOBsdCbMuaA1ZtCRmckPTQ35LCW+NZwgWMes9E6hMLoxJnGYDwXJNhM0zjPSOa5Qif0wi4YYulnDHF8Pk-GqMolgFKb9MwCJNjpRmFDZKuj1zYg1jYDEVYaxrFmOYoJ0j8jyz6kLEW0TQ7fUzL49E9pZRzWStKXSpZdIa21vvLY0JBH4SWUvfIfs0ABxdh9Ppvd94jD5HuWKZsZi2gNtDBS6FXCkJmi4XMnT8jHw3lvGubzL4oUwgcGYuJhEnEZjNTYGUtGHFzOMQJGQgA */
  id: 'vendingMachine',
  context: {
    products: [{
      id: 1,
      name: "Snickers",
      price: 1.99,
      outOfStock: false
    },
    {
      id: 2,
      name: "KitKat",
      price: 1.49,
      outOfStock: true
    },
    {
      id: 3,
      name: "Twix",
      price: 1.25,
      outOfStock: true
    },
    {
      id: 4,
      name: "Milky Way",
      price: 1.99,
      outOfStock: false
    },
    {
      id: 5,
      name: "Reese's Peanut Butter Cups",
      price: 2.49,
      outOfStock: false
    },
    {
      id: 6,
      name: "M&M's",
      price: 1.99,
      outOfStock: true
    },
    {
      id: 7,
      name: "Hershey's Cookies 'n' Creme",
      price: 1.79,
      outOfStock: false
    },
    {
      id: 8,
      name: "Butterfinger",
      price: 1.99,
      outOfStock: true
    },
    {
      id: 9,
      name: "3 Musketeers",
      price: 1.49,
      outOfStock: true
    },
    {
      id: 10,
      name: "Nestlé Crunch",
      price: 1.29,
      outOfStock: false
    },
    {
      id: 11,
      name: "Almond Joy",
      price: 1.99,
      outOfStock: true
    },
    {
      id: 12,
      name: "Hershey's Milk Chocolate",
      price: 1.49,
      outOfStock: false
    }],
    coins: [
      {
        id: 1,
        value: 0.1
      },
      {
        id: 2,
        value: 0.25
      },
      {
        id: 3,
        value: 0.5
      },
      {
        id: 4,
        value: 1.00
      },
      {
        id: 5,
        value: 2.00
      },

    ],
    amount: 0
  },
  states: {
    loading: {
      invoke: {
        src: 'loadProducts',

        onDone: {
          target: "idle",
          actions: 'assignProductsToContext'
        },

        onError: "showError"
      },
    },

    idle: {
      on: {
        INSERT_COIN: {
          target: "coinsInserted",
          actions: 'setAmountInserted'
        },

        SELECT_PRODUCT: [{
          target: "oosMessage",
          cond: "isOutOfStock",
          actions: "setSelectedProduct"
        }, {
          target: "dispensingProduct",
          cond: "sufficientFunds",
          actions: "setSelectedProduct"
        }, "noFundsMessage"],

        RETURN_FUNDS: {
          target: "fundReturnedMessage",
          actions: "returnFunds"
        }
      }
    },

    coinsInserted: {
      on: {
        INSERT_COIN: {
          target: "coinsInserted",
          actions: 'setAmountInserted',
          internal: true
        }
      },

      after: {
        "200": "idle"
      }
    },

    dispensingProduct: {
      after: {
        "2000": [{
          target: "returnChange",
          cond: "hasChange",
          actions: "calculateChange"
        }, "thankYouPage"]
      }
    },

    fundReturnedMessage: {
      after: {
        "3000": "idle"
      }
    },

    noFundsMessage: {
      after: {
        "1000": "idle"
      }
    },

    oosMessage: {
      after: {
        "1000": "idle"
      }
    },

    returnChange: {
      after: {
        "1000": "thankYouPage"
      }
    },

    thankYouPage: {
      after: {
        "1000": "idle"
      }
    },

    showError: {
      after: {
        "500": "loading"
      }
    }
  },

  initial: "loading"
}, {
  actions: {
    assignProductsToContext: assign((context, event) => {
      return {
        products: event.data
      };
    }),
    setSelectedProduct: assign((context, event) => {
      return {
        selectedProduct: event.selectedProduct
      }
    }),
    setAmountInserted: assign((context, event) => {
      return {
        amount: event.amount
      }
    }),
    returnFunds: assign((context, event) => {
      return {
        amount: event.amount
      }
    }),
    calculateChange: assign((context, event) => {
      return {
        change: parseFloat(context.amount - context.selectedProduct.price.toFixed(2)),
        amount: 0
      }
    })
  },
  guards: {
    isOutOfStock: (context, event) => {
      return event.selectedProduct && event.selectedProduct.outOfStock;
    },
    sufficientFunds: (context, event) => {
      return event.selectedProduct && event.selectedProduct.price <= context.amount;
    },
    hasChange: (context, event) => {
      return context.selectedProduct && context.amount > context.selectedProduct.price;
    }
  },
});