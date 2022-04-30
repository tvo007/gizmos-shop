import React, {useState} from 'react';
import Footer from './Footer';
import MobileNav from './MobileNav';
import Nav from './Nav';
import SalesReminder from './SalesReminder';

const Layout = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState (false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen (true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen (false);
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        <section className="relative">
          <SalesReminder />
          <div className="px-6 lg:px-12">
            <Nav handleDrawerOpen={handleDrawerOpen} />
            {isDrawerOpen &&
              <MobileNav handleDrawerClose={handleDrawerClose} />}
          </div>
        </section>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
