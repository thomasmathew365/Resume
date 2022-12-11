import React, { useContext } from 'react';

export const NavigationContext = React.createContext({
  menuOpen: false,
  selectedMenuGroup: 0,
  selectMenuItem: 'HOME'
})

export const useNavigationContext = () => useContext(NavigationContext)

