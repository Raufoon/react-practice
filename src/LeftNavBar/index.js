import styles from "./index.module.css";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import { ReactComponent as CollapseIcon } from "./icons/close.svg";
import { ReactComponent as DefaultIcon } from "./icons/music.svg";
import { useCallback, useMemo, useReducer } from "react";
import NavButton from "./NavButton";
import {
  defaultNavBarOptions,
  LeftNavBarContext,
  leftNavBarOptionsReducer,
  LEFT_NAV_BAR_ACTIONS,
  NAV_MENUS,
} from "./state-manager";

export default function LeftNavBar() {
  const [options, dispatch] = useReducer(
    leftNavBarOptionsReducer,
    defaultNavBarOptions
  );

  const toggleExpandedState = useCallback(
    function () {
      dispatch({ type: LEFT_NAV_BAR_ACTIONS.TOGGLE_EXPAND });
    },
    [dispatch]
  );

  const selectNavMenu = useCallback(
    function (selectedNavMenu) {
      dispatch({ type: LEFT_NAV_BAR_ACTIONS.SELECT_NAV_MENU, selectedNavMenu });
    },
    [dispatch]
  );

  const leftNavBarContext = useMemo(() => {
    return {
      options,
      selectNavMenu,
    };
  }, [options, selectNavMenu]);

  const { isExpanded } = options;

  return (
    <LeftNavBarContext.Provider value={leftNavBarContext}>
      <section
        className={`${styles.LeftNavBar} ${isExpanded ? styles.expanded : ""}`}
      >
        <NavButton
          className={styles.toggleButton}
          Icon={isExpanded ? CollapseIcon : MenuIcon}
          onClick={toggleExpandedState}
        ></NavButton>

        <NavButton Icon={DefaultIcon} navTarget={NAV_MENUS.SPLITRACES}>
          Sample Nav
        </NavButton>

        <NavButton Icon={DefaultIcon} navTarget={NAV_MENUS.HISTOGRAMS}>
          Sample Nav
        </NavButton>

        <NavButton Icon={DefaultIcon} navTarget={NAV_MENUS.PROFILES}>
          Sample Nav
        </NavButton>

        <NavButton Icon={DefaultIcon}>Submenu</NavButton>

        <NavButton Icon={DefaultIcon}>Sample Button</NavButton>

        <NavButton Icon={DefaultIcon}>Sample Button</NavButton>

        <NavButton Icon={DefaultIcon} navTarget={NAV_MENUS.SETTINGS}>
          Sample Navbutton
        </NavButton>
      </section>
    </LeftNavBarContext.Provider>
  );
}
