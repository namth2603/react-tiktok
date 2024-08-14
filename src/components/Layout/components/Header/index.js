import { useState,useEffect } from 'react';
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard,
    faCloudUpload, faMessage
} from "@fortawesome/free-solid-svg-icons"
import Tippy from "@tippyjs/react/headless";
import Button from "~/components/Button"
import Menu from "~/components/Popper/Menu"
import {Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles)

const MENU_ITEMS= [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children:{
            title: "Language",
            type: "Language",
            data:[
                {
                code: 'en',
                title: 'English ',
                    children:{
                        title: "Language 1",
                        type: "Language 1",
                        data:[
                            {
                                code: 'en',
                                title: 'English 1',
                                children:{
                                    title: "Language 2",
                                    type: "Language 2",
                                    data:[
                                        {
                                            code: 'en',
                                            title: 'English 2'
                                        },
                                        {
                                            code: 'vi',
                                            title: 'Tiếng Việt 2'
                                        }
                                    ]
                                }
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt 1'
                            }
                        ]
                    }
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: "Feedback and help",
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title:"Keyboard shortcuts"
    }
]
function Header(){
    const  [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(()=>{
            setSearchResult([])
        },0)
    }, []);

    const handleMenuChange = (menuItem) =>{
        console.log(menuItem)

        switch (menuItem.type) {
            case 'language':
                // logic
                break;
            default:
        }
    }

    const currenUser = true

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo"/>

                </div>
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck="false"/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>

                </Tippy>

                <div className={cx('action')}>
                    {currenUser ? (
                        <>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon  icon={faCloudUpload} />
                            </button>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon  icon={faMessage} />
                            </button>
                        </>
                    ) : (
                            <>
                                <Button text>
                                    Upload
                                </Button>
                                <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}/>} className={cx('custom-login')}>
                                    Log in
                                </Button>

                            </>
                    )}
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        {currenUser ? (
                            <img
                                src="https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg"
                                className={cx('user-avatar')} alt="Traan Hai Nam"/>
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )}

                    </Menu>
                </div>

            </div>

        </header>
    )
}

export default Header