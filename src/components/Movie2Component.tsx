import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Movie2Component.css";

export type Movie2ComponentType = {
  /** Style props */
  propDebugCommit?: CSSProperties["debugCommit"];
};

const Movie2Component: FunctionComponent<Movie2ComponentType> = ({
  propDebugCommit,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div className="property-1default1" style={property1Default1Style}>
      <img
        className="property-1default-item"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <div className="lorem-ipsum-dolor9">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</div>
    </div>
  );
};

export default Movie2Component;
