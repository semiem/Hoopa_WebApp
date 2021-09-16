import React from 'react';
import {generateRequest} from "../Utils/Helper";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.loginBtn = React.createRef();
        // this.doLogin = this.doLogin.bind(this);

    }


    doLogin() {
        this.loginBtn.current.innerHTML = "در حال ورود";
        generateRequest("login", 'POST',
            {'email': this.username.current.value, 'password': this.password.current.value})
            .then(
                (loginResult) => {
                    sessionStorage.setItem('token', loginResult.token);
                    // this.props.history('/');
                    window.location = '/';

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div className="">
                <div className="position-relative">
                    <img src="/img/icons/login-bg.png" className="img-fluid w-100" style={{height: "250px"}} alt="..."/>
                    <img src="/img/icons/hoopa_es.png" className="p-3 position-absolute top-0 start-0 " alt="..."/>
                    <img src="/img/icons/worm.png" className="img-fluid position-absolute bottom-0 start-0" alt="..."/>
                </div>
                <div className="container-fluid mt-2">
                    <p className="fs-3"><strong>با این شماره قبلاً ثبت نام کردی!</strong></p>
                    <p className="fs-3 text-muted">برای وارد شدن نام کاربری و رمز عبورت رو بنویس.</p>
                    <input ref={this.username} type="text"
                           value="eve.holt@reqres.in"
                           className="rounded form-control w-100 mb-3"
                           style={{height: "50px"}}
                           placeholder="نام کاربریت رو اینحا بنویس"/>
                    <input ref={this.password} type="password"

                           value="cityslicka"
                           className="rounded form-control w-100 mb-3"
                           style={{height: "50px"}}
                           placeholder="رمز عبورت رو اینحا بنویس"/>
                    <p className="fs-6 fw-bold"> رمز عبورت رو فراموش کردی؟
                        <span style={{color: "#80E8D0"}}> بازیابی رمز عبور </span></p>
                    <p className="fs-6 fw-bold"> قبلا ثبت نام نکردی؟
                        <span style={{color: "#80E8D0"}}> ثبت نام در هویا </span></p>
                    <button onClick={() => this.doLogin()}
                            ref={this.loginBtn}
                            className="btn btn-lg rounded-pill w-100 mb-3"
                            style={{backgroundColor: "#80E8D0", borderColor: "#80E8D0"}}
                            type="button">ورود
                    </button>

                </div>
            </div>
        );
    }
}

export default Login;
