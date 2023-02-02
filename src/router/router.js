import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../components/Home";
import Donations from "../components/Donations";
import About from "../components/About";
import { db } from "../utils/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "../App.css";
import App from "../App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about/" element={<About />} />

      <Route
        path="/donations"
        element={
          <div className="App">
            <Donations />
          </div>
        }
        loader={async ({ request }) => {
          return await getDocs(collection(db, "donations"));
        }}
      />
    </Route>
  )
);

export default router;
