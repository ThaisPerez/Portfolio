import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";

export default function Footer (){
  return (
    <Router>
    <div className="ContainerFooter">
    <ul>
  <li>
    <a href="#">
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <span> - Facebook</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <span> - Twitter</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-google-plus" aria-hidden="true"></i>
      <span> - Google</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <span> - Instagram</span>
    </a>
  </li>
  </ul>
  </div>
    </Router>
  );
}