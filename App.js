import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navegation/index";



export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}