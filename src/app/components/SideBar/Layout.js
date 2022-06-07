import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Aside from './Aside';
import Main from './Main';

function Layout(props) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [active, setActive] = useState(true);

  const handleActive = () => {
    console.log('activeval',active)
    setActive(!active);
  };

  const handleCollapsedChange = () => {
    console.log('collapsed',collapsed);
    setCollapsed(!collapsed);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    //setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    console.log('toggle',value)
    setToggled(value);
  };

  const navigate = (item) => {
    console.log('navigate', item,active);
    setActive(!active);
    props.history.push(item);
  }

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        navigate={navigate}
        active={active}
        heading={props.title}
      />
      <Main handleToggleSidebar={handleToggleSidebar} collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleCollapsedChange={handleCollapsedChange}>
        {props.children}
      </Main>
    </div>
  );
}

export default withRouter(Layout);