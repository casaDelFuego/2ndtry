import { createMachine, assign } from 'xstate';

export const vendingMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDcwDsIEs1QLIEMBjAC2zADoAbAe3yxwGIJq0LtlqBrC1DbPIqVZVa9KAnbVC+AC6YWAbQAMAXWUrEoAA7VYmOS00gAHogC0AdgsAOcgGZrdgKzWl1mwBY7SgGwAaEABPcwBGJwAmJ3J3O28vJycATicfHwBfNIDeMQISMhE6fgYwACcS6hLyLUpZADMKgFtybP5coQoaQpwJNA5pAzR1dSMdPQGjUwQzEPClD2ibaxCLJSUQn2W7AOCpkK8fclXrFItEs9OPRIys9BzBfMwISjAGAEkAOQBlAFEAJQAVAD6AGEAPIfYZIECjfTyNATRCnA7hJbhFEoix2Hx2DzbUJKJzzJzrOyJcIeNYeDxOCzXEAtHBtB5PF4-AAy32BQIACr9QQARACqXMh2l0sMMUMmZgcB3cIXWHhsZzRXjxuyU5PIPmpIWs7g2HnSmXpt1a92Ej2eDHZnJ5fKFIpCGihMPGUvMHms4XIiViDi9yxSOq2QXMFnCIV9SjORsSEY8ew8dIZAjylpZNu+HK5gN5AuF-wU4RdYrGcIRUyWBwsCoJpz1Or16umBKicxSMxCWNmhJTZsZFrYmd+33+gt+70BADFBe9+Z9RdDxe7QJMQr57BYnHMlr4bOFUi2ZtYDg5T9ZEpqKXZD-2+IP0xRCNRsLBXmhYKUZJA3l8-kCYIQqoIwrhWHoICk7ayjeFiJikoY7K2bjkJ4xLessiQUrSJqpkywgvm+H5fiUP4QAwxiwDIsgUPgtQ-iUAAUsxKAAlAweFDuQhGfsR36QEubrgWuiDkrYzghiierOEoFgtokYTkFS24ElSXpKHY953E+5BYLAWjoHoODcuUEAAK6EDIFFUTR5B0QxzGrGxHEDmm7S6Zg+mGfwJnUOZlmCWBkoiQg3ZKOQYQbj4xwRgk4SJC2OrhbMySyrepLUlp5o6XpBmfj5pkWVZlHUT+dn0aUjmrOxnE5Z5eVGVAvn+TICjOqB5bBSY5gpdEsRKj4pwYW4TiJeEdhKckjgUmStanllj7ubUZkYL8YAyGZJSsBAuBwLA+AwNZpW0RVTHeNVLkPm5+TLat62bdtu2wPtMCBZ18IQVitiYh4swhH60Vov4Ya7AqtiOHMClGpeVJOAt13CGg1DTitECwE9L0vCVtn2ZVG4XbV7lIyjGDo3tB1gG9EofSF0yzL63pnM4PbHDMx6qr6Fg+OSv1+okGwhPD+EUNQugYxTR046djH485hP5KLZPPRTVOrt1UwA+Q8WKk4X2Xm4x44lGGnhCsG7xTSPhXLhrnC+QJT3VtwLEPgOBYzZZW42dTk1bbXEOxtTsu27qvCer3YWIcTlzNi27bkkLZGuFg1esSdgbt2MzGjcV12zIwecAAmtQZnchL2Oe9L51y37On567Rcl2Xr0ga6QU0+rrY2FrrgZY4p6+KNINmDSkdKgaMY+Ek6xwzbudcbAxDUAA7t8ZQVJLlcOTuNfzzpi8r2v5QlKHXXSie8wOGiyzkoeg3WMeuvzG4KKxONzgpNYGQmkjEBwEY8tWAdWppWaYb97DekjAmO+NhjzYh9MkX6U8kTcyFlxToYhgFq3PgSRIEVIzjScleWSD9h5hGpEpaKGwFKHj2C4NBOkrRgCwWHSYzgIruH1KeeKMYYwJTITMcKOI4LrEGrMQ8yY57aXcjxd8n5+IQBYWfRAVIfSRFrLMHwBJIikKQlzPBYlsTWCpFbNwgspHZXcrlbyxlCqWSUR3SYZxUJuFiKsKK3hsQtn0VrL02Irz43oRYxaN1UZrUDo9cmMAHGVhpPMBSKwuaM1NgqQ23ZDjc23Eqa+V5wgMKJsjVGStMYxIgmYS4E0n4z0GgpWSiFQjvyUi4fmutnDUl8PkhWYsonMLbu9UBZIfQuGEaSLm41dHmH1JHGwOporEN1hsTpwgA4PWdq7aJfSQEQT8dqes8Z-rjSNLrFsutI4xx3MSBUgjNLBIRhQeuaBG6lwpqU2mO4DjLAwoNdOmJayJ25hFBSrhVhwR0XYHCOdpH5APqvdeJRXmd0EWPNYmINjCJpIbX65BCST0pOCpYX9v5AA */
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
      outOfStock: false
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
      outOfStock: false
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
      outOfStock: false
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
      outOfStock: false
    },
    {
      id: 12,
      name: "Hershey's Milk Chocolate",
      price: 1.49,
      outOfStock: true
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
        "3000": "thankYouPage"
      }
    },

    thankYouPage: {
      after: {
        "3000": "idle"
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
      const parsedChange = parseFloat((context.amount - context.selectedProduct.price).toFixed(2))
      return {
        change: parsedChange,
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