import  { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles)

function AccountItem(){
    return(
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg"
                alt="Nam"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Hai Nam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                    tranhainam
                </span>
            </div>
        </div>
    )
}

export default  AccountItem;