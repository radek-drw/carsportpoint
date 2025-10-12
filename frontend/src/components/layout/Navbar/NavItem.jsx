import { Link } from 'react-router-dom';

const NavItem = ({ label, href, isActive, onClick, isMobile }) => {
  // Base classes
  const mobileBaseClasses = 'flex flex-col items-start text-xs lg:text-base px-4 py-3';
  const desktopBaseClasses =
    'flex items-center justify-center h-full px-4 text-base text-navDesktop transition-all duration-300';

  // Dynamic classes
  const activeClasses = 'shadow-[inset_0_-4px_0_0] shadow-customRed text-customRed';
  const hoverClasses =
    'hover:shadow-[inset_0_-4px_0_0] hover:shadow-customRed hover:text-customRed';

  // Classes for <Link>
  const getLinkClasses = () => {
    if (isMobile) {
      return `${mobileBaseClasses} ${isActive ? 'text-white' : 'text-[#A6A6A6]'} hover:text-white`;
    } else {
      return `${desktopBaseClasses} ${isActive ? activeClasses : hoverClasses}`;
    }
  };

  // Classes for <li>
  const getContainerClasses = () => {
    return isMobile ? 'border-t-[1px] border-solid border-[#222]  last:border-b-[1px]' : 'h-full';
  };

  return (
    <li className={getContainerClasses()}>
      <Link
        to={href}
        className={getLinkClasses()}
        aria-current={isActive ? 'page' : undefined}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
