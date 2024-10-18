import '../../styles/header.css';


function Header(){
    
    return (
        <div id="header">
            <div id="headerLeft">
                <h1>Taskly</h1>
                <h3>
                    Monday - 12 March 2024
                </h3>
            </div>

            <div id='headerMiddle'>
                <h1>
                    12:20:40
                </h1>
            </div>

            <div id="headerRight">
                <div>
                    <img src="/img/notification_icon.png" alt="Notification icon"/>
                    <img src="/img/hamburger_menu.png" alt="Dark mode"/>
                </div>
                <h3>
                    Jakarta - Indonesia
                </h3>
            </div>    
        </div>
    )
}


export default Header;