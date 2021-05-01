import { useCallback, useContext } from "react";
import styles from "./NavButton.module.css";
import PropTypes from "prop-types";
import { LeftNavBarContext } from "./state-manager";

export default function NavButton(props) {
  const { className, Icon, children, navTarget, onClick } = props;

  const { options, selectNavMenu } = useContext(LeftNavBarContext);

  const handleClick = useCallback(
    function () {
      navTarget && selectNavMenu(navTarget);
      onClick && onClick();
    },
    [navTarget, selectNavMenu, onClick]
  );

  const { isExpanded, selectedNavMenu } = options;

  return (
    <div
      className={`${styles.NavButton} ${className} ${
        navTarget && navTarget === selectedNavMenu ? styles.active : ""
      }`}
      onClick={handleClick}
    >
      <Icon />
      {isExpanded && <aside>{children}</aside>}
    </div>
  );
}

NavButton.propTypes = {
  Icon: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  navTarget: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};
