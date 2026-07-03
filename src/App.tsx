
import CoffeeScrollAnimation from "./components/CoffeeScrollAnimation/CoffeeScrollAnimation";
import DosaScrollAnimation from "./components/DosaScrollAnimation/DosaScrollAnimation";
import SpicesScrollAnimation from "./components/SpicesScrollAnimation/SpicesScrollAnimation";
import Home from "./pages/Home";
function App() {
  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Home />
      {/* <DosaScrollAnimation /> */}
      {/* <CoffeeScrollAnimation /> */}
      {/* <SpicesScrollAnimation /> */}
    </main>
  );
}

export default App;