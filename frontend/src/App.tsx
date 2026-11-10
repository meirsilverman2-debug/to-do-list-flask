import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./Layout/Layout.tsx";
import TodoListPage from "./pages/TodoListPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {

  
  return (
    <>
  <Routes>
  <Route element={<Layout/>}>
  <Route path="/options" element={<HomePage/>}/>
  <Route path="/todoList" element={<TodoListPage/>}/>
  <Route path="/" element={<LoginPage/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
  </Route>
  </Routes>
  </>
   
  );
}

export default App;
