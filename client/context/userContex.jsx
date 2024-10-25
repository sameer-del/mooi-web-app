import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Reload from "../src/components/Reload";

// Initialize UserContext
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/profile")
      .then(({ data }) => {
        if (data && !data.error) {
          setUser(data); // Set user data if the response is valid
        } else {
          setUser(null); // No user data if there was an error
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false); // Always set loading to false at the end
      });
  }, []);

  if (isLoading) {
    return <Reload />; // Optionally, add a loading spinner
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
