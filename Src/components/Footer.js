import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {

  const { user } = useContext(userContext);

    return <h2 className="text-3xl p-10 m-2">This site is developed by {user.name}</h2>;
  };

export default Footer;