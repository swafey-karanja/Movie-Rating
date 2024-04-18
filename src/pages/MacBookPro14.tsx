import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MacBookPro14.css";

const MacBookPro14: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConnectButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in-page-3">
      <main className="background-image-group">
        <img
          className="background-image-icon3"
          alt=""
          src="/background-image2@2x.png"
        />
        <section className="overlay4" />
      </main>
      <div className="log-in-form4">
        <div className="log-in-form5" />
        <div className="frame-group">
          <div className="log-in-container">
            <div className="log-in2">Log In</div>
          </div>
          <div className="lorem-ipsum-dolor-container2">
            <p className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</p>
            <p className="blank-line4">&nbsp;</p>
            <p className="convallis-convallis-tellus2">{`Convallis convallis tellus id interdum velit laoreet id donec. Faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis mauris sit amet massa vitae tortor. Purus gravida quis blandit turpis cursus. `}</p>
            <p className="blank-line5">&nbsp;</p>
            <p className="malesuada-fames-ac2">
              Malesuada fames ac turpis egestas. Habitasse platea dictumst
              vestibulum rhoncus est pellentesque elit ullamcorper. Sed augue
              lacus viverra vitae. Dui id ornare arcu odio. Eu sem integer vitae
              justo eget magna.
            </p>
          </div>
        </div>
        <div className="connect-button-label">
          <div className="connect-button-container">
            <div className="connect-button2" onClick={onConnectButtonClick} />
            <div className="connect-to-wallet3">Connect to Wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro14;
