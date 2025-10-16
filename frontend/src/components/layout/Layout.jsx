import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-customLight font-main text-customGrey relative max-w-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
