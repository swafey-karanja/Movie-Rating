import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MacBookPro141.css";

const MacBookPro141: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConnectButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in-page-2">
      <img
        className="background-image-icon"
        alt=""
        src="/background-image1@2x.png"
      />
      <section className="overlay" />
      <div className="log-in-form">
        <div className="log-in-form1" />
        <div className="frame-parent">
          <div className="log-in-wrapper">
            <div className="log-in">Log In</div>
          </div>
          <div className="lorem-ipsum-dolor-container">
            <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</p>
            <p className="blank-line">&nbsp;</p>
            <p className="convallis-convallis-tellus">{`Convallis convallis tellus id interdum velit laoreet id donec. Faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis mauris sit amet massa vitae tortor. Purus gravida quis blandit turpis cursus. `}</p>
            <p className="blank-line1">&nbsp;</p>
            <p className="malesuada-fames-ac">
              Malesuada fames ac turpis egestas. Habitasse platea dictumst
              vestibulum rhoncus est pellentesque elit ullamcorper. Sed augue
              lacus viverra vitae. Dui id ornare arcu odio. Eu sem integer vitae
              justo eget magna.
            </p>
          </div>
        </div>
        <div className="log-in-form-inner">
          <div className="connect-button-parent">
            <div className="connect-button" onClick={onConnectButtonClick} />
            <div className="connect-to-wallet">Connect to Wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro141;
