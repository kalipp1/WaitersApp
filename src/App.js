import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      123
    </div>
  );
};

export default App;
