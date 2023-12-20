import { store } from 'app/store';
import React, { FC } from 'react';
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children: React.ReactNode
}

const StoreProvider: FC<StoreProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;