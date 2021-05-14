import { Button, Dropdown, Menu, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';

const DropdownMenu = (props) => {
  const { list = [], onSelect = () => {}, byIndex = false } = props;

  const { Option } = Select;

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
      }
      onChange={(value) => onSelect(byIndex ? value : list[value])}
    >
      { list.map((item, idx) => 
        <Option value={idx}>
          {item}
        </Option>
      )}
    </Select>
  );
}

export default DropdownMenu;