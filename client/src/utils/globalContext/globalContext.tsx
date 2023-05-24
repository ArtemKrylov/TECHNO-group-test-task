import {
  ReactElement,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { IProduct } from 'utils/ts/models/product';

interface IGlobalContext {
  orderShop?: number | null;
  setOrderShop?: React.Dispatch<React.SetStateAction<number | null>>;
  productsInCart?: IProduct[];
  setProductsInCart?: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

//creating context UserContext for auth
export const GlobalContext = createContext<IGlobalContext>({});

//custom hook to use UserContext
export const useGlobal = () => useContext(GlobalContext);

interface GlobalProviderProps {
  children: string | ReactElement | ReactElement[];
}

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
  children,
}) => {
  //shop index, which products are in cart
  const [orderShop, setOrderShop] = useState<number | null>(null);

  const productsInLocalStorage = useMemo(() => {
    return JSON.parse(localStorage.getItem('cart') ?? '[]');
  }, []);

  const [productsInCart, setProductsInCart] = useState<IProduct[]>(
    productsInLocalStorage
  );

  return (
    <GlobalContext.Provider
      value={{ orderShop, setOrderShop, productsInCart, setProductsInCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
