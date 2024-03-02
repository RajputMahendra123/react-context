import { ThemeProvider } from "./ThemeContext";
import { ToDoProvider } from "./ToDoContext";
import { UserProvider } from "./UserContext";

// Combine multiple contexts
const CombinedContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <ThemeProvider>
        <ToDoProvider>
          {/* Add more providers for other contexts */}
          {children}
        </ToDoProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default CombinedContextProvider