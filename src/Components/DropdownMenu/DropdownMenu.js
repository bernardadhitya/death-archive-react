import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';

const DropdownMenu = (props) => {
  const { list = [], onSelect } = props;

  const menu = () => (
    <Menu>
      { list.map((item, idx) => 
        <Menu.Item onClick={() => onSelect(idx)}>
          {item}
        </Menu.Item>
      )}
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button>
        - <DownOutlined />
      </Button>
    </Dropdown>
  );
}

export default DropdownMenu;