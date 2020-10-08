import React from 'react'

const Setting = () => {

    let userInfo = {
        userName: "テスユーザ",
        userImageUrl: "./src/work/image/user.jpg",
        userHeaderUrl: "./src/work/image/user_header.jpg",
        userId: "testuser",

    }
    return (
        <div className="main-container" style={{ overflow: "auto" }}>
            <React.Fragment>
                {/*  <!-- ユーザID --> */}
                <div class="setting-outer" style={{ height: "30px" }}>
                    <div class="setting-menu-inner">@ユーザID</div>
                </div>
                {/* アカウント */}
                <CenterItem itemName="アカウント" imageUrl="./src/work/image/right.png" />
                <CenterItem itemName="セキュリティ" imageUrl="./src/work/image/right.png" />
                <CenterItem itemName="通知" imageUrl="./src/work/image/right.png" />
            </React.Fragment>
        </div>
    )
}
const CenterItemName = (props) => {



}
const CenterItem = (props) => {
    return (
        <div class="setting-outer setting-name-hover">
            <a href="" class="a-to-block2" style={{ height: "30px" }}>
                <div class="setting-inner">{props.itemName}</div>
                <div class="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -75%)", right: "1%" }}>
                    <a class="" href="" aria-label="">
                        <img class="right-icon" src={props.imageUrl} alt="" />
                    </a>
                </div>
            </a>
        </div>
    )

}

export const RightAreaSetting = (props) => {
    return (
        <div className="main right border" style={{ overflow: "auto", height: "100vh", width: "350px", }}>
            <React.Fragment>
                {/* <!-- 設定項目 --> */}
                <div class="menu-name-parent" aria-label="メニュー名">
                    <div class="menu-name" aria-label="メニュー名">{props.settingItemMenuName}</div>
                </div>
                {/* <!-- ログインとセキュリティ --> */}
                <div class="setting-outer" style={{ height: "30px" }}>
                    <div class="setting-menu-inner">{props.itemName}</div>
                </div>
                <RightItem itemName="ユーザ名" itemContent="testId" />
                <RightItem itemName="メールアドレス" itemContent="example@exampole.com" />
                <RightItem2 itemName="パスワード" />
                {/* <!-- アカウント削除 --> */}
                <div class="setting-outer setting-name-hover">
                    <a href="" class="a-to-block2" style={{height: "30px"}}>
                        <div class="setting-inner">アカウント削除</div>
                        <div class="menu-name" aria-label="メニュー名" style={{transform: "translate(-20%, -75%)",right: "1%"}}>
                            <a class="" href="" aria-label="新規アクション">
                                <img class="right-icon" src="./src/work/image/right.png" alt="新規メッセージ"/>
                            </a>
                        </div>
                    </a>

                </div>
            </React.Fragment>
        </div>
    )
}
export const RightItemName = (props) => {
    return (
        <div class="menu-name-parent" aria-label="メニュー名">
            <div class="menu-name" aria-label="メニュー名">{props.itemName}</div>
        </div>
    )
}
 const RightItem = (props) => {
    return (
        <div class="setting-outer setting-name-hover">
            <a href="" class="a-to-block2">
                <div>
                    <div class="">{props.itemName}</div>
                    <div style={{ fontSize: "13px", color: "rgb(115, 129, 136)" }}>{props.itemContent}</div>
                </div>
                <div class="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -50%)", right: "1%" }}>
                    <a class="" href="" aria-label="新規アクション">
                        <img class="right-icon" src="./src/work/image/right.png" alt="新規メッセージ" />
                    </a>
                </div>
            </a>

        </div>
    )
}
const RightItem2 = (props) => {
    return (
        <div class="setting-outer setting-name-hover" style={{borderBottom: "10px solid rgb(56, 68, 77)"}}>
        <a href="" class="a-to-block2" style={{height: "30px"}}>
                <div class="setting-inner">{props.itemName}</div>
            <div class="menu-name" aria-label="メニュー名" style={{transform: "translate(-20%, -75%)",right: "1%"}}>
                <a class="" href="" aria-label="新規アクション">
                    <img class="right-icon" src="./src/work/image/right.png" alt="新規メッセージ"/>
                </a>
            </div>
        </a>

    </div>
    )
}
export default Setting