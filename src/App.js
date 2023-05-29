import "./Main_module.scss";
import { Banner } from "./components/Banner/Banner";
import { Categories } from "./components/Categories/Categories";
import Products  from "./components/Products/Products";
import { Branches } from "./components/Branches/Branches";
import { Branch } from "./components/Branch/Branch";
import { We } from "./components/We/We";
import { Contact } from "./components/Contact/Contact";
import { Korzina } from "./components/Korzina/Korzina";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Karta from "./components/Karta/Karta";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<><Banner /> <Categories /><Products /> </>}/>
        <Route path="branches" element={<Branches />}/>
        <Route path="branches/:id" element={ <Branch />}/>
        <Route path="contacts" element={<Contact />} />
        <Route path="we" element={<We />} />
        <Route path="we-us" element={<Navigate to="/we"/>} />
        <Route path="korzina" element={<Korzina />}/>
        <Route path="map" element={<Karta/>}/>
      </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
        </>
  );
}

export default App;
