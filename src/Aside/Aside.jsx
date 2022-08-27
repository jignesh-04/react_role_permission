import React from "react";
import { FcWikipedia, FcButtingIn } from "react-icons/fc";
import { BsPersonFill,BsPerson ,BsPeople,BsUiChecksGrid,BsCheckAll} from "react-icons/bs";

const Aside = () => {
  return (
    <aside className="main_aside">
      <div className="logo">
        <a href="#" className="logo_box">
          <FcWikipedia className="logo" />
          <span className="logo_text">Component</span>
        </a>
        <hr />
      </div>

      <a href="#" className="user_box">
        <FcButtingIn className="user" />
        <span className="user_text">UserName</span>
      </a>
      <hr />
      <div className="mail_li">
        <li>
          <BsPerson className="icon" />
          <span className="icon_text">Student</span>
        </li>
        <li>
          <BsPeople className="icon" />
          <span className="icon_text">User</span>
        </li>
        <li>
          <BsUiChecksGrid className="icon" />
          <span className="icon_text">Role</span>
        </li>
        <li>
          <BsCheckAll className="icon" />
          <span className="icon_text">Permission</span>
        </li>
      </div>
    </aside>
  );
};

export default Aside;
