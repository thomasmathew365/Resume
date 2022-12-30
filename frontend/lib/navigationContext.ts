import React, { useContext } from 'react';

export const NavigationContext = React.createContext({
  menuOpen: false,
  selectMenuItem: 'HOME'
})

export const useNavigationContext = () => useContext(NavigationContext)

