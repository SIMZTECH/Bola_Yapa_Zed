/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useRef} from 'react';
import NavBar from '../components/nav/NavBar';
import AdminRoutes from '../routes/AdminRoutes';
import StickyNav from '../components/sticky_nav/StickyNav';
import { AdminContextProvider, adminContext } from '../contexts/AdminContext';

function AdminLayout() {
  const asideNav = useRef<any>(null);

  const toggleMenuHandler = () => {
    console.log("clicked");
    asideNav.current?.classList.toggle("show_menu");
  };

  return (
    <div>
      <div className="h-[100vh] bg-lightGreenColor bg-opacity-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 h-full">
          {/* left */}
          <div onClick={toggleMenuHandler} ref={asideNav} className="aside_nav">
            {/* navigation */}
            <NavBar />
          </div>
          {/* right */}
          <main className=" col-span-5 w-full h-full main-content overflow-y-scroll">
            <header className="sticky_nav md:hidden z-20">
              {/* stick navigator */}
              <StickyNav callback={toggleMenuHandler} />
            </header>
            <div className='pb-10'>
              <AdminRoutes />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;