import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 mt-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
