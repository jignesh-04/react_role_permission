import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../Create";
import Login from "../login";
import Dashbord from "../Pages/Dashbord";
import route_1 from "../Router/route";

const Route_index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Dashbord />}>
          {route_1.map((value, inx) => {
            // console.log("route=>", value);
            return (
              <Route
                key={inx}
                path={value.path}
                element={<value.component />}
              />
            );
          })}
        </Route>
        {/* <Route path="create" element={<Create />} /> */}
        {/* <Route path ="/" element={<Dashbord/>}/> */}
      </Routes>
    </>
  );
};

export default Route_index;
