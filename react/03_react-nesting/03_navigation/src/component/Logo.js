import logo from "../img/logo.jpg";
import { Image } from "./Image";

export const Logo = () => {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
};
