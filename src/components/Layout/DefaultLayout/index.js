import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Sidebar from "~/components/Layout/components/Sidebar";
import Footer from "~/components/Layout/components/Footer";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)
function DefaultLayout({children}) {

    return (
      <div>
          <Header/>
          <div className='container'>
              <Sidebar/>
              <div className='content'>
                  {children}
              </div>
          </div>
          <Footer/>
      </div>
    )

}

export default DefaultLayout