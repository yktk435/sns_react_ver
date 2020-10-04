import React from 'react'
import Home from './home'
// import Search from './Search'
import Notification from './notification'
import Dm from './dm'
// import profile from './Paprofilege'
// import setting from 'Setting./'

const CenterArea = ({ info }) => {
    let comp;
    console.log(info)
    switch (info.menu) {
        case 'home':
            comp = <Home />
            break;
        //         case 'search':
        // comp=<search/>
        //             break;
        case 'notification':
            comp = <Notification state="all" />
            break;
        case 'dm':
            comp = <Dm />
            break;
        //         case 'profile':
        // comp=<profile/>
        //             break;
        //         case 'setting':
        // comp=<setting/>
        //             break;

        default:
            break;
    }
    return (
        <div className="main center border">
            <React.Fragment>
                {/* メニュー名 */}
                <div className="menu-name-parent" aria-label="メニュー名">
                    <div className="menu-name" aria-label="メニュー名">{info.menuName}</div>
                </div>
                {/* メイン */}
                {/* ここにメニュー特有のページ */}
                {comp}
            </React.Fragment>

        </div>
    )
}

export default CenterArea