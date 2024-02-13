import Tabs from "./tabs";
import './tabs.css'

function RandomDataComponent() {
  return <h2>Random Data Content</h2>;
}

export default function TabNav() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content for Tab-1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab-2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomDataComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex); 						// *OR any action needed on click of the tab
  }

  return <Tabs tabContent={tabs} onChange={handleChange} />;
}
