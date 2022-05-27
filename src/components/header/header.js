
import logo from '../../images/logo.jpg'
import './header.css'


export function Header(){


    return (
        <div class="header">
            <img class="logo" src={logo} alt="logo"/>
            <div class="auth_block">
                <button class="sign_in_button">вход</button>
                <button class="sign_up_button">регистрация</button>
            </div>
        </div>
    )
}