import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";

const LogInPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConnectButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in-page-4">
      <main className="background-image-parent">
        <img
          className="background-image-icon2"
          alt=""
          src="/background-image@2x.png"
        />
        <section className="overlay3" />
      </main>
      <div className="log-in-form2">
        <div className="log-in-form3" />
        <div className="connect-label-parent">
          <div className="connect-label">
            <div className="log-in1">Log In</div>
          </div>
          <div className="lorem-ipsum-dolor-container1">
            <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</p>
            <p className="blank-line2">&nbsp;</p>
            <p className="convallis-convallis-tellus1">{`Convallis convallis tellus id interdum velit laoreet id donec. Faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis mauris sit amet massa vitae tortor. Purus gravida quis blandit turpis cursus. `}</p>
            <p className="blank-line3">&nbsp;</p>
            <p className="malesuada-fames-ac1">
              Malesuada fames ac turpis egestas. Habitasse platea dictumst
              vestibulum rhoncus est pellentesque elit ullamcorper. Sed augue
              lacus viverra vitae. Dui id ornare arcu odio. Eu sem integer vitae
              justo eget magna.
            </p>
          </div>
        </div>
        <div className="connect-to-wallet1">
          <div className="connect-button-group">
            <div className="connect-button1" onClick={onConnectButtonClick} />
            <div className="connect-to-wallet2">Connect to Wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
