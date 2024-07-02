import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className="mt-10 bg-off-white">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout