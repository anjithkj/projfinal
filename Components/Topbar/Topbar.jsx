import  './Topbar.css' 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import img from'../../images/OIP.jpg'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
            <span className='logo'>xupra</span>
        </div>
        <div className="topright">
            <div className="topcontainer"><NotificationsNoneIcon/>
            <span className='topiconbadge'>2</span></div>
            
            <div className="topcontainer"><SettingsIcon/>

            </div>
            <div className="topcontainer"><LanguageIcon/> </div>
              <img src={img} alt="" className="topimage" />
            </div>
            
            
            

        

      </div>
    </div>
  )
}

export default Topbar
