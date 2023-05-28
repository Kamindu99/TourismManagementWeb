import React from 'react';
import Footer from '../../../components/footer/Footer';
import Blog from '../Blog/Blog';
import BusinessInfo from '../Businessinfo/BusinessInfo';
import HeaderTop from '../HeaderTop/HeaderTop';
import Services from '../Services/Services';
import './Header.css';
import Contact from '../Contact/Contact';

const Header = () => {
    return (
        <header>
            <HeaderTop></HeaderTop>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </header>
    );
};

export default Header;