import '../../styles/header.css';


function Header(){
    
    return (
        <div id="header">
            <div id="top">
                <h1>Taskly</h1>
                <div>
                    <img src="/img/notification_icon.png" alt="Notification icon" id='notificationIcon'/>
                    <img src="/img/dark_mode_icon.png" alt="Dark mode" id='darkmodeImage'/>
                </div>
            </div>
            <div id="bottom">
                <h3>
                    Monday - 12 March 2024
                </h3>
                <h1>
                    12:20:40
                </h1>
                <h3>
                    Jakarta - Indonesia
                </h3>
            </div>    
        </div>
    )
}


export default Header;