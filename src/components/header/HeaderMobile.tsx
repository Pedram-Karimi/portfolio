import { usePhoneSideMenu } from "../../context/PhoneSideMenu";
import logo from "../../assets/images/logo-v3.png";

//
const HeaderMobile: React.FC = () => {
  const { changeSideMenuStatus, sideMenuStatus } = usePhoneSideMenu();
  return (
    <div className="headerMobile">
      {!sideMenuStatus && (
        <svg
          viewBox="0 0 16.933 16.933"
          onClick={() => {
            changeSideMenuStatus();
          }}
        >
          <path d="M12.271 1.323H1.984c-1.1-.042-1.1 1.63 0 1.588H12.23c1.08.042 1.122-1.588.042-1.588zM1.984 7.673c-1.058 0-1.058 1.587 0 1.587h5.8c1.08 0 1.08-1.587 0-1.587zm0 6.35c-1.058 0-1.058 1.587 0 1.587h12.997c1.058 0 1.058-1.587 0-1.587z" />
        </svg>
      )}
      {sideMenuStatus && (
        <svg
          viewBox="0 0 24 24"
          onClick={() => {
            changeSideMenuStatus();
          }}
        >
          <path
            d="M13.4,12l6.3-6.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4
	l6.3,6.3l-6.3,6.3C4.1,18.5,4,18.7,4,19c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.4,0.3,0.7,0.3
	s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z"
          />
        </svg>
      )}
      <img src={logo} alt="logo" />
    </div>
  );
};

export default HeaderMobile;
