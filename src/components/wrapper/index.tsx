import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';
import SideMenu from '../sidemenu';
import './index.scss';

interface wrapper {
    children: ReactNode;
}

const Wrapper = ({ children }: wrapper) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="wrapper-container">
                <div className="wrapper-sidemenu">
                    <SideMenu />
                </div>
                <div className="wrapper-children">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Wrapper;
