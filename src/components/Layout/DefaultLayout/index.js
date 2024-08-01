import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import Footer from "~/components/Layout/components/Footer";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)
function DefaultLayout({children}) {

    return (
      <div className={cx('wrapper')}>
          <Header/>
          <div className={cx('container')}>
              <Sidebar/>
              <div className={cx('content')}>
                  {children}
              </div>
          </div>
          <Footer/>
      </div>
    )

}

export default DefaultLayout