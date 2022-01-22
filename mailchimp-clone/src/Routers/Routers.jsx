import { Route, Routes } from "react-router-dom";
import { BlocksTab } from "../components/BlocksTab/BlocksTab";
import { CreatingAnEmail } from "../components/CreatingAnEmail/CreatingAnEmail";
import { DashboardMain } from "../components/Dashboard/DashboardMain";
// import {Homepage} from "../components/Homepage"
// import Campaigns from "../components/Campaigns"
// import SignupPage from "../components/SignupPage/Signup"
import Template from "../components/Template/Template";
import FinalPage from "../components/FinalPages/Final";
import Homepage from "../components/Homepage/Homepage";
import Campaigns from "../components/Campaigns/Campaigns";

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/dashboard" element={<DashboardMain />}></Route>
        <Route path="/campaigns" element={<Campaigns />}></Route>
        <Route path="/dashboard/template" element={<Template />}></Route>
        <Route path="/createEmail" element={<CreatingAnEmail />}></Route>
        <Route path="/blocktab" element={<BlocksTab />}></Route>
        <Route path="/finalSubmit" element={<FinalPage />}></Route>

        <Route path="*" element={<h1>Error 404</h1>}></Route>
      </Routes>
    </div>
  );
}
