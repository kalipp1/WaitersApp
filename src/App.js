import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import TablePage from "./components/pages/TablePage/TablePage";
import Footer from "./components/views/Footer/Footer";


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<TablePage />} />  
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
