import { createMachine, assign } from 'xstate';

export const vendingMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDcwDsIEs1QLIEMBjAC2zADoAbAe3yxwGIJq0LtlqBrC1DbPIqVZVa9KAnbVC+AC6YWAbQAMAXWUrEoAA7VYmOS00gAHogC0AdgsAOcgGZrdgKzWl1mwBY7SgGwAaEABPcwBGJwAmJ3J3O28vJycATicfHwBfNIDeMQISMhE6fgYwACcS6hLyLUpZADMKgFtybP5coQoaQpwJNA5pAzR1dSMdPQGjUwQzEPClD2ibaxCLJSUQn2W7AOCpkK8fclXrFItEs9OPRIys9BzBfMwISjAGAEkAOQBlAFEAJQAVAD6AGEAPIfYZIECjfTyNATRApRLkcJLNaJS7HE7bULhRIhewWDw+JweLxnHwWa4gFo4NoPJ4vH4AGW+wKBAAVfqCACIAVXZkO0ulhhihkzMdg84XIpx8SgsyzxqK8HhxuzCdnsHhCM0ViTcPnCHmptIEeWEj2eDBZbM53P5gpCGihMPG4sQ4XW5GJFnl1h8lzsPmcaqCoTCticcusxys4XCwdNt1a90tjJt31Z7MBXN5Av+CnCLuFYzhCKms2RDiSlLsFnCGz26rMZy10eDKWsZJCdnWyb4dLTbAzv2+-z5v3egIAYnz3jzPkLoSL3aAJXZkYk-eEG9KnKs9y31t71r41tHY0o7AO7haR9axxOp7P54uFM6Rqvyx6ENKDpciSOCEcxShcx4bFEVjdsaBpwTMt6pve5CENQ2CwK8aCwKUMiQAwxiwDIsgUPgtS4SUAAUIGrAAlAwZr0sIqHoZh2ElLhEDLm6P7rogFhRIkJLuCsjhKJE27Ho2FjkHsrgYnEazGohQ7IVgsBaOgeg4By5QQAAroQMj4YRxHkKR5EUbMtH0SmKntOQakaVh-A6dQ+mGVx35irxCApAJpIRPxYROFKWzhrsazzK4YnrEs7gYiEynmvZtR6RgvxgDIeklKwEC4HAsD4DAxlEbhZlkaUVGrEodEMcO5CpelmXZbl+WwIVMCeWW3kmJ6BrRMSqIJkkDiKseXgymsfqBiFJK6tYSWMRQaDUDOaUQLAbUdS8BGlSRFWUdRNU2YOyX5Cta0YJtBVFWAXWivCv5mAmtjbkSIF2ImsSNpJAbkIkm4uCk14bA2i31dQuhbbdJWmeZlXeNZdXIZD13tbd91rr1UzEkoA2CZEJzBusx6btJgmKnibgWN4Gzg8hJTNTlwLEPgOA7SZZXw5RVnHcj9mM1lzOs+zmM8djB4ogq-GrGEkEk+FlhJD6vipH6Bryn29P2TIIucAAmtQekcjDu1wwdFEHnztlncIutswbRsm51qhft1j0+WYIXSerXh+g4AYhC2iTGuQJJEhEPgAx48Xa-ksDENQADu3xlBUsNcxbVu1TbS3kAnyep+UJRiz1EozN29jWAmSr-pS1jHiF8xuKi32xAkPgLZkNK5-V2D6Bn+0WdnJ13vZ-cyKXHvY9MSikj6iqUo29ZGoGx7Xu2+pgUTDhx5aaAD2bmfD0jvfIRPH4liu7sVrP88eIvDYhjua+KxitjUWcFPdrqVLUitEA4BGH5mQN2D1b69k+lXGue5Gz12PCsLUgYjTV18C4Ps4Q94dFEPwMBWNy5z2RDMGYiMlAGgVA3RWYQPBRGJIHfEjY9guCweQK0YA8HiwITKOsCY+zLDIdKIOVCHBEN8MkKwERtxShYcxLCrEcKQA4WXT0McZJkl3NuMSsQMThEkp3MOMc3DBkxOsP+NxTp50cppFyukDIyCUdPSYeJ5jeFiDHEMv8-Tr2vCiS4exiSfRDMcFhjUIAZSFq1G6MAHEVgfsiJwupdRrGcPiI041KTkHQSBSkJJO7RhYRddaaNtoxKen7TJHidQGgbKk0mIFoj4g8AqSIUp8Q3m7iA4QqNobRNdF5Rx5gGzSTEskWsc8iQhlJsGf6zglh+L2NudIHSz4CyZmgFmbNemlnAb+IG9gQhfz2Ac+ulCdiWH0X2DYndPoxRSCw+2aBHbG1uqUz2yIaGuGOAcoZywxqK1jFuQxUdiSXkVCwguKc04lFeTPYhBJozRwSEsJspNLiZJBvuBIswQosInjCmQ1AtChA3pk6upwxGxGvBYAIzwyK4jcPYVYXpZhNMEbokAAAjagMgCUNHMEBKILgNEUtcdSkAJRMBQGIPYiKsZGUxRZXMZlAQk6PF1ogGYSgAjEDAJK6ViAY4BHLrMWwiNmVzCVTMdesRSXCqjpS+sBSwDGBkAAAk5uwvpN8npEmRPxEOqxBIhGriFa17YyUawBqKkJ+BKCwECO6va+LCXmHcAcICRp27ewSjSsAdKpjV3mINMh-E8QJDClynl1A+UFtRP9AMX1y0XCERKqVMrLBzB9EaEtkjy0qrVcQDVsxtW6rbQayhEpC1dqrKW0ZYUzlpvrZm5w2adQZAyEAA */
  predictableActionArguments: true,
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

        RETURN_FUNDS: [{
          target: "idle",
          cond: "nothingToReturn",
          internal: true
        }, {
          target: "fundReturnedMessage",
          actions: "returnFunds"
        }]
      }
    },

    coinsInserted: {
      after: {
        "1000": "idle"
      }
    },

    dispensingProduct: {
      after: {
        "2000": {
          target: "returnChange",
          cond: "hasChange",
          actions: "calculateChange"
        },
      }
    },

    fundReturnedMessage: {
      after: {
        "1000": "idle"
      }
    },

    noFundsMessage: {
      after: {
        "1000": "idle"
      }
    },

    oosMessage: {
      after: {
        "3000": "idle"
      }
    },

    returnChange: {
      after: {
        "2000": "thankYouPage"
      }
    },

    thankYouPage: {
      after: {
        "500": "idle"
      }
    },

    showError: {
      after: {
        "500": "loading"
      }
    },


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
      console.log(event);
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
    },
    nothingToReturn: (context, event) => {      
      return context.amount === 0;
    }
  },
});