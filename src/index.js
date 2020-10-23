import React from "react";
import { render } from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";

import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";

render(<App />, document.querySelector("#content"));
