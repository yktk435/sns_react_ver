import React from 'react'

const Profile = () => {
    
    let userInfo = {
        userName: "テスユーザ",
        userImageUrl: "./src/work/image/user.jpg",
        userHeaderUrl: "./src/work/image/user_header.jpg",
        userId: "testuser",

    }
    return (
        <div className="main-container" style={{ overflow: "auto" }}>
            <div style={{ position: "relative" }}>
                {/* <!-- ヘッダ画像 --> */}
                < div >
                    <a href="">
                        <img src={userInfo.userHeaderUrl} class="header-image" alt="" />
                    </a>
                    {/* <!-- ユーザ画像 --> */}
                    <a href="" class="user-image-a">
                        <img src={userInfo.userImageUrl} alt="" class="user-image-image-tag"/></a>

                </div>
                {/* <!-- プロフィール部分 --> */}
                <div style={{ padding: "15px" }}>
                    {/* <!-- プロフィール編集ボタン --> */}
                    <div class="icon-container" style={{ width: "170px", margin: "0px 0px 0px auto", height: "40px" }}>
                        <a class="a-to-block edit-prof" href="" style={{ borderRadius: "100px", position: "relative", color: "white", textDecoration: "none", border: "1px solid rgba(29,161,242,1.00)", color: "rgba(29,161,242,1.00)" }}>
                            <div class="" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", margin: "auto", width: "80%", height: "20px", textAlign: "center", fontSize: "15px", fontWeight: "bold" }}>プロフィールを編集</div>
                        </a>
                    </div>
                    {/* <!-- ユーザ名とユーザIDを表示 --> */}
                    <div>
                        {/* <!-- ユーザ名 --> */}
                        <div style={{ paddingTop: "10px", fontSize: "20px", fontWeight: "bold" }}>{userInfo.userName}</div>
                        {/* <!-- ユーザID --> */}
                        <div style={{ color: "rgb(115, 129, 136)", marginTop: "5px" }}>@{userInfo.userId}</div>
                    </div>
                    {/* <!-- 投稿・返信・メディア(写真)・いいね(ぐっと)を表示 --> */}
                    <div style={{ width: "100%", display: "inline-flex" }}>
                        <div id="prof-menu" class="blue-when-hover propfile-menu" style={{WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)", width:" calc(100%/2)",}}
                            align="center" onclick="BlueLineWhenClick(this)">
                            投稿
                                </div>
                        <div id="prof-menu" class="blue-when-hover propfile-menu" style={{ width: "calc(100%/2)", }} align="center" onclick="BlueLineWhenClick(this)">
                            返信
                                </div>
                        <div id="prof-menu" class="blue-when-hover propfile-menu" style={{ width: "calc(100%/2)", }} align="center" onclick="BlueLineWhenClick(this)">
                            写真
                                </div>
                        <div id="prof-menu" class="blue-when-hover propfile-menu" style={{ width: "calc(100%/2)", }} align="center" onclick="BlueLineWhenClick(this)">
                            ぐっと
                                </div>
                    </div>
                </div>
            </div>
            {/* <!-- ユーザ投稿一覧 --> */}
            <div></div>
        </div>
    )
}
export default Profile