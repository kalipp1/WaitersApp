import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<Home />} />
            <Route path="/table/edit/:id" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Container>
  );
};

export default App;
