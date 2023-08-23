import "./Header.scss"
import icon from "../assets/main-icon.png" 
import dp from "../assets/dp2.jpeg"

const Tab = (name, link) => {
    return (
        <a href={link} class="tab-link">
            <span className="header-tab">{name}</span>
        </a>
    )
}
const Header = () => {
    return (
        <div className='header-root'>
            <div className='header-left'>
                <img src={dp} height={50} width={50} className="img-logo"/>
                {Tab('DHRUV DHAR')}
            </div>
            <div className='header-right'>
                {Tab('CONTACT')}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Tab('PROJECTS')}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Tab('ABOUT', "#about")}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Tab('HOME', "#home")}
            </div>
        </div>
    )
}
export default Header;