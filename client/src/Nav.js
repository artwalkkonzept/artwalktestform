import React from "react";
import { Link } from "react-router-dom";
//import AppForm from "./AppForm";

function Nav() {

  return (
        <ul>
            <li>
                <Link className="navLi" to="/"> AppForm </Link>
            </li>
        </ul>
  );
}

export default Nav;