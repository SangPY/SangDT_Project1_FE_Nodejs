import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <MailOutlined />,
        }, 
        {
            label: <Link to={"/user"}>User</Link>,
            key: 'user',
            icon: <MailOutlined />,
        },
        {
            label: 'Welcome React JS',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
            {
                label: 'Đăng nhập',
                key: 'setting:3',
            },
            {
                label: 'Đăng xuất',
                key: 'setting:4',
            },
        ],
        },
        ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
};
return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;