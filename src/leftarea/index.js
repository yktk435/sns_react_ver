import React from 'react';

const LeftArea = () => {
    return (
        <header>
            <div className="main left border" style={{ overflow: "auto" }}>
                <React.Fragment>
                    <div className="div-outside-image site-image">
                        <a className="icon-link icon-to-center-for-a" href="" aria-label="サイトアイコン">
                            <img className="image-icon icon-to-center-for-img site-image-icon" src="./src/work/image/cat.png" alt="サイトアイコン" />
                        </a>
                    </div>
                    <div>
                        <IconParts name="home" alt="ホームアイコン" innerstr="ホーム" />
                        <IconParts name="search" alt="検索アイコン" innerstr="検索" />
                        <IconParts name="bell" alt="通知アイコン" innerstr="通知" />
                        <IconParts name="dm" alt="メッセージアイコン" innerstr="メッセージ" />
                        <IconParts name="human" alt="プロフィールアイコン" innerstr="プロフィール" />
                        <IconParts name="setting" alt="設定アイコン" innerstr="設定" />
                        <div class="div-outside-image icon-container" style={{width: "70%",marginBottom: "140px"}}>
                            <a class="a-to-block post-icon" href="" style={{borderRadius: "100px", position: "relative"}}>
                                <div class="block-to-center">
                                    <img class="image-icon" src="image/cathand2.png" alt="投稿開始ボタン" />
                                </div>
                            </a>
                        </div>
                    </div>
                </React.Fragment>
            </div>
            </header>
    )
}
const IconParts = (props) => {
    return (
        <div className="if-spreaded mark">
            <a href="index.html" className="spreaded-icon-a">
                <React.Fragment>
                    <div style={{ float: "left" }}>
                        <img className="img-size" src={"./src/work/image/" + props.name + ".png"} alt={props.alt} />
                    </div>
                    <div className="icon-discription spreaded-icon-name">{props.innerstr}</div>
                </React.Fragment>
            </a>
        </div>
    )
}

export default LeftArea;