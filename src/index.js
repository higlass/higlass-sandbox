import "./styles.css";
import { viewer } from "higlass";

import viewconf from "./viewconf.json";

viewer(document.getElementById("app"), viewconf, { bounded: true });
