import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Himanshu Kushwaha",
    email: "support@happytummy.com",
  },
});

export default userContext;
