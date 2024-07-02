import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='bg-off-white min-h-screen'>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
