import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import {
  addCoffeeAction,
  addNewCoffeeAction,
  removeCoffeeAction,
  resetAllAction,
  subCoffeeAction,
  sumCoffeeAction,
} from '../reducers/Cart/actions'
import { cartReducer, Coffee } from '../reducers/Cart/reducer'

interface Address {
  cep: string
  street: string
  number: string
  complement: string
  city: string
  state: string
  neighborhood: string
}

interface ShoppingCartContextType {
  items: Coffee[]
  total: number
  addNewItem: (item: Coffee) => void
  removeItem: (id: string) => void
  addItem: (id: string) => void
  subItem: (id: string) => void
  userAddress: Address
  handleChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  paymentMethod:
    | undefined
    | 'Cartão de crédito'
    | 'Cartão de débito'
    | 'Dinheiro'
  handleChangePaymentMethod: (
    payment: undefined | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
  ) => void
  resetAll: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    () => {
      // const storedStateAsJSON = localStorage.getItem(
      //   '@coffee_delivery:cart-State-1.0.0',
      // )

      // if (storedStateAsJSON) {
      //   return JSON.parse(storedStateAsJSON)
      // }
      return { items: [] }
    },
  )

  const [userAddress, setUserAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    neighborhood: '',
  } as Address)

  const [paymentMethod, setPaymentMethod] = useState<
    undefined | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
  >()

  const { items } = cartState
  const total = items.reduce((totalPrice, item) => {
    return totalPrice + item.amount * item.price
  }, 0)

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(cartState)
  //   localStorage.setItem('@coffee_delivery:cart-State-1.0.0', stateJSON)
  // }, [cartState])

  function addNewItem(item: Coffee) {
    const tryFindCoffeeOnCart = items.find((coff) => coff.id === item.id)
    if (tryFindCoffeeOnCart) {
      dispatch(sumCoffeeAction(item.id, item.amount))
    } else {
      dispatch(addNewCoffeeAction(item))
    }
  }

  function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    setUserAddress((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  function handleChangePaymentMethod(
    payment: undefined | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
  ) {
    setPaymentMethod(payment)
  }

  function removeItem(id: string) {
    dispatch(removeCoffeeAction(id))
    console.log('item removido do carrinho: ', id)
  }

  function resetAll() {
    dispatch(resetAllAction())
  }

  function addItem(id: string) {
    dispatch(addCoffeeAction(id))
  }

  function subItem(id: string) {
    dispatch(subCoffeeAction(id))
  }

  const ShoppingCartContextProviderValue = useMemo(
    () => ({
      items,
      subItem,
      addItem,
      removeItem,
      addNewItem,
      total,
      userAddress,
      handleChangeAddress,
      paymentMethod,
      handleChangePaymentMethod,
      resetAll,
    }),
    [
      items,
      subItem,
      addItem,
      removeItem,
      addNewItem,
      total,
      userAddress,
      handleChangeAddress,
      paymentMethod,
      handleChangePaymentMethod,
      resetAll,
    ],
  )

  return (
    <ShoppingCartContext.Provider value={ShoppingCartContextProviderValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)

  return context
}