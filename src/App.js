import Wrapper from "./Wrapper";
import { Routes, Route } from "react-router-dom";
import { AllTodos, General, About, Completed } from "_pages";
import { ThemeToggle } from "_components/";
import { hot } from "react-hot-loader/root";
import "_presentation/font";
function App() {
  return (
    <Wrapper>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/about" element={<About />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/all_todos" element={<AllTodos />} />
      </Routes>
    </Wrapper>
  );
}

export default hot(App);
