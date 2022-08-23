import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {/*  depthLevel : Pour éviter que les submenu s'ouvrent les uns sur les autres */}
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}  />
        })}
      </ul>
    </nav>
  );
};

export default Navbar;