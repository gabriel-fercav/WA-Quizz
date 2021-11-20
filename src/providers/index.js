import { QuizzProvider } from "./QuizzProvider";

const Providers = ({ children }) => {
  return (
  <QuizzProvider>
            {children}
  </QuizzProvider>
  )
};

export default Providers;
