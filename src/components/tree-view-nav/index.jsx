import MenuList from "./menu-list";
import './styles.css';

export default function TreeView({ menuData = [] }) {
  return (
    <div className="tree-view-container">
        <h2>Tree View Nav</h2>
      <MenuList list={menuData} />
    </div>
  );
}
