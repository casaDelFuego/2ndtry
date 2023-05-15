import { createMachine, assign } from 'xstate';

export const vendingMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDcwDsIEs1QLIEMBjAC2zADoAbAe3yxwGIJq0LtlqBrC1DbPIqVZVa9KAnbVC+AC6YWAbQAMAXWUrEoAA7VYmOS00gAHogC0AdgsAOcgGZrdgKzWl1mwBY7SgGwAaEABPcwBGJwAmJ3J3O28vJycATicfHwBfNIDeMQISMhE6SAB6SkxYGQACagAzCq0AJ2oIAFdCGVgi7C1mmQYASQA5AGUAUQAlABUAfQBhAHlB9SMdPQM0I1MEC0SfcnDrEPD9-Ys7HzsPAOCEMxClJw9yJxDzxPCPJRCPDycLDKz0DlBPkaIUICUypUanVGi02h0uj0GKMADIjGbTAAKYzmABEAKoYpZIEArfTydYkzZmcI+R4hO4HT4OcKHS5BcyJOyJcgWJxuKweVmsxKJf4gbL8XJCCigiDFUrlKq1BpNVrtTpobq9VHorE4glEkIaElktYbcw+A5PazWDyJA4RT7uK7mbY81JeVzhJThRLu8WSnDSkGiBWQ5UwtXwzXa5EjNEYqbYvGEiYKcIm7S6cmGKnmA67CwM+7bELWOnl103O4JchKH4+Q4hM4+h6BwFS4HCOXhpXQ1VwjWI3pjEYTfFjAZTABi+IGuKGxOzqwpFoQd12dj5DaZPhstP8HJr+y3tqtiV9HzstI7fGD3YohGo2FgfTQsDA9RkkH6w3G0zzIsqjLDm5r5ggKRREoDh0jBFgeGE5zVrcShuLydrPNYrLbB8fyZBKnYPnkwjPq+76ft+v7GOUsgUPg1Q-vUAAUPpKAAlAwQYCCRT4vh+FFfj+EDLqSYFrhB7y2M4dI3gcjj8hYKGJGE5DfDuDzfK4dh3kCvHkFgsBaOgeg4JisLqgwNEyHR5AMUxrFoRxXFETxMoGWUxkfvw5nRjIolmhJoCbC2SjkGEm7WL8kQRIkKFwXsSjJLBN7cj8uldvphleaZUC+UOVm0T+dmMV+jloZx3EhsI2UmT5FltAoxqgauebBeYPo8o4FwWPuDqsm4TjxeEdhqckjgfG8xYVhlxHudUzQYGMYAyM09SsBAuBwLA+AwIVNnFfZZXeBVLn3m5+QLUtK1rRtW2wDtMABeJbUmIgZy2KcQqfFyVpHEe1y3AytiOA2KkeBe3xOLNF3CGg1AzotECwPdj1gPttlHSxdynVVj7kPDiMYCj227WAz2tZS7UnmF-Wis4rZRYcKGHO85D+j47xClyOwMjD1UUNQuio2TGOHaV2NOZVrkC+QQskw9ZMU7mVNvTcv17CpdJOB91iXtYLMXCE9Y3hYny+skvVigReP6fUN3rTMxD4Dg6PWZjEvMTjzm2+59urY7zuu8r4HUy2Fj1k5DbnHyfJJChENhfuHhM3Ydwtoc6Q2zL+MyEHnAAJrUM0mKi+74sOd70vnbLecu4Xxel09IGmi9qvUvyxuXn6CQxD6JwoUkEfvFytphLEtIeBkBHw-K8Akr7ZAtSr65A0oEfNiNTmXuvBvHrc5zhOzHhWIkWmx-z+Nyvwy+h2rqFJOFwonUlaE2CzDxRBDFYhCptJfC4S++lezgkVFCFUDVhxah6LfIKatnDhXcLaCsfpX6ihZocMKPVEKpAsP3OkQD3JkQEh+ISkBYGvU2N8I+kRiw+h8PcSIe9AZWz2Cnc4doIb6xCIQ-ItVvJmUgRQ9uiBRS8jcLENCm5vDIX3qwqSrxzb3GsLw4QV0IDLQDndUmMBhHrl+I8FSZterYSmgyQ2LZ6ycz5CfI4v9fSqIoITJGCs0Z6IgmYe0o0dY4JSGWdedgWYjVGj8PWPgdbOB+L4RxcthY6LAO46mZguTG1jg2CIdIz6xBQlYIsQoIghG2Ckc4MT-a3Sdi7XRrdKbrnYeQBhvx-S-xGhDHWg9tz1lafcBkDIfQ6WzjXXO+ci4lzJok++-JdiFOwi8U4hTtwhATpzcKKlXBv3yY4fCGQgA */
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
          target: 'loaded/list of products/input',
          actions: 'assignProductsToContext'
        }
      },
    },

    "loaded/list of products/input": {
      on: {
        INSERT_COIN: {
          target: "coinsInserted",
          actions: 'setAmountInserted'
        },

        SELECT_PRODUCT: [{
          target: "dispensingProduct",
          cond: "sufficientFunds",
          actions: "setSelectedProduct"
        }, {
          target: "oosMessage",
          cond: "isOutOfStock"
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
        "200": "loaded/list of products/input"
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
        "3000": "loaded/list of products/input"
      }
    },

    noFundsMessage: {
      after: {
        "1000": "loaded/list of products/input"
      }
    },

    oosMessage: {
      after: {
        "1000": "loaded/list of products/input"
      }
    },

    returnChange: {
      after: {
        "1000": "thankYouPage"
      }
    },
    thankYouPage: {
      after: {
        "1000": "loaded/list of products/input"
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
      change: context.amount - context.selectedProduct.price,
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