import "./App.css";
import { Button } from "@/ui/button";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <div className=" min-h-screen w-full ">
      <MainLayout />

      <Button>Click me </Button>
    </div>
  );
}

export default App;
