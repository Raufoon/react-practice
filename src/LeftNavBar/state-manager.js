import { createContext } from "react";

export const LeftNavBarContext = createContext(null);

export const LEFT_NAV_BAR_ACTIONS = {
  TOGGLE_EXPAND: "TOGGLE_EXPAND",
  SELECT_NAV_MENU: "SELECT_NAV_MENU",
};

export const defaultNavBarOptions = {
  isExpanded: false,
  selectedNavMenu: null,
};

export const NAV_MENUS = {
  SPLITRACES: "SPLITRACES",
  HISTOGRAMS: "HISTOGRAMS",
  PROFILES: "PROFILES",
  SETTINGS: "SETTINGS",
};

export function leftNavBarOptionsReducer(state, action) {
  switch (action.type) {
    case LEFT_NAV_BAR_ACTIONS.TOGGLE_EXPAND:
      return {
        ...state,
        isExpanded: !state.isExpanded,
      };

    case LEFT_NAV_BAR_ACTIONS.SELECT_NAV_MENU:
      const { selectedNavMenu } = action;
      return {
        ...state,
        selectedNavMenu,
      };

    default:
      return state;
  }
}
