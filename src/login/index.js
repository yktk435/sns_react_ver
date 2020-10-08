import React from 'react'

const Login = () => {
    return (
        <div style={{ padding: "10px" }}>
            <div aria-label="外側" style={{ margin: "0 auto", width: "600px" }}>
                <React.Fragment>
                    {/* <!-- サイトアイコン --> */}
                    <div style={{ padding: "10px" }}>
                        <img src="./image/cat.png" alt="" style={{ width: "40px", display: "block", margin: "0 auto" }} />
                    </div>
                    <div style={{ padding: "10px" }}>
                        <div style={{ display: "block", margin: "0 auto", textAlign: "center", fontSize: "23px", fontWeight: "bold" }}>サイトにログイン</div>
                    </div>

                    {/* <!-- ユーザ名 --> */}
                    <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "0 10px", margin: "10px 10px" }}>
                        <React.Fragment>
                            <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)" }}>
                                ユーザ名
                </div>
                            <input className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)" }} />
                        </React.Fragment>
                    </div>
                    {/* <!-- パスワード --> */}

                    <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "0 10px", margin: "10px 10px" }}>
                        <React.Fragment>
                            <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)" }}>
                                パスワード
                                </div>
                            <input className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)" }} />
                        </React.Fragment>
                    </div>
                    {/* <!-- ログインボタン --> */}
                    <div style={{ marginBottom: "20px" }}>
                        <a className="a-to-block2 btn--orange" href="" style={{ borderRadius: "30px", height: "50px", textAlign: "center", width: "550px", margin: "0 auto" }}><p style={{ padding: "10px" }}>ログイン</p></a>
                    </div>
                    {/* <!-- パスワードを忘れた・アカウント作成 --> */}
                    <div>
                        <React.Fragment>
                            <a href="" className="a-to-block2" style={{ color: "rgb(27, 149, 224)" }}>パスワードを忘れた</a>
                            <a href="" className="a-to-block2" style={{ color: "rgb(27, 149, 224)" }}>アカウント作成</a>
                        </React.Fragment>
                    </div>
                </React.Fragment>
            </div>
        </div>

    )
}

export default Login