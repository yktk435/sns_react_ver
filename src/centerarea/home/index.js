import React from 'react'

const Home = () => {
    let userInfo = {
        userImageUrl: "./src/work/image/user.jpg"
    }
    let PostedUserInfo = {
        userName: "テスユーザ",
        userImageUrl: "./src/work/image/user.jpg",
        userId: "testuser",
        createdAt: "202x年x月x日",
        postImageUrl:"./src/work/image/user.jpg",

    }
    return (
        <div className="main-container" style={{ overflow: "auto" }}>
            <React.Fragment>
                {/* メニュー特有のなにか */}
                <div style={{ borderBottom: "8px solid rgb(48, 60, 67)", height: "auto", padding: "2px" }} className="post-screen">
                    <React.Fragment>
                        <div style={{ float: "left" }} aria-label="ユーザアイコン">
                            <div style={{ margin: "5px" }}>
                                <a class="" href="" aria-label="ユーザアイコン">
                                    <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} class="" src={userInfo.userImageUrl} alt="ユーザアイコン" />
                                </a>
                            </div>
                        </div>
                        <div class="text-area" contentEditable="true" placeholder="aaaaaa"></div>
                        <div style={{ display: "flex", marginTop: "15px", marginBottom: "5px" }}>
                            <div style={{ display: "flex", marginLeft: "auto" }}>
                                <a style={{ margin: "0 5px" }} class="icon-link simple-icon" href="" aria-label="写真追加">
                                    <img class="image-icon" src="./src/work/image/pic.png" alt="写真追加アイコン" />
                                </a>
                                <a style={{ margin: "0 5px", }} href="" class="btn btn--orange btn--radius" aria-label="投稿ボタン">投稿</a>
                            </div>
                        </div>
                    </React.Fragment>
                </div>
                {/* みんなの投稿 */}
                <div>
                    <OtherPost {...PostedUserInfo}/>
                   </div>

            </React.Fragment >
        </div >
    )
}
const OtherPost = (props) => {

    return (
        <div style={{ padding: "10px 15px", borderBottom: "1px solid rgb(48, 60, 67)", display: "inline-flex", height: "auto" }} className="post-screen">
        <React.Fragment>
            {/* ブロック1 */}
            <div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                <div style={{ margin: "5px" }}>
                    <a className="" href="" aria-label="ユーザアイコン">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={props.userImageUrl} alt="ユーザアイコン" />
                    </a>
                </div>
            </div>
            {/* ブロック2 */}
            <div style={{ display: "block" }}>
                <React.Fragment>
                    {/* <!-- ユーザ名 --> */}
                    <div>
                        <div style={{ float: "left", marginLeft: "5px" }}>
                                <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{props.userName}</a>
                        </div>
                        <div style={{ float: "left", margin: "0 15px" }}>
                                <a style={{ textDecoration: "none", color: " rgb(115, 129, 136)" }} href="">@{props.userId}</a>
                        </div>
                            <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>{props.createdAt}</div>
                    </div>
                    {/* <!-- 投稿内容 --> */}
                    <div>
                        <React.Fragment>
                                <div className="font" style={{ padding: "5px 0" }} aria-label="投稿した文字を表示">{props.content}</div>
                            <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                <a href="" onClick="return">
                                        <img src={props.postImageUrl} alt="投稿した写真を表示" style={{ width: "90%", borderRadius: "5%" }} />
                                </a>
                            </div>
                        </React.Fragment>
                    </div>
                </React.Fragment>
            </div>
        </React.Fragment>
    </div>

    )
}
export default Home