import { AiOutlineDown } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './index.scss';

interface allMenu {
    name: string;
    link: string;
    hasChildren: boolean;
    main: boolean;
    icon?: any;
    children?: Array<Object>;
}

const SideMenu = () => {
    const allMenu: allMenu[] = [
        {
            name: 'Dashboard',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Invoice',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Customers',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Staff',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Membership',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Gift Cards',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Services',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Appointment',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Reports',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
        {
            name: 'Profile',
            link: '/profile',
            hasChildren: false,
            main: true,
            icon: CgProfile,
        },
    ];
    return (
        <div className="sidemenu">
            <ul className="sidemenu-list">
                {allMenu.map((menu, i) => (
                    <li key={i} className="sidemenu-list-menu">
                        <div className="sidemenu-list-menu_main">
                            <menu.icon />
                            <Link to={menu.link}>{menu.name}</Link>
                        </div>
                        {menu.hasChildren && <AiOutlineDown />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
