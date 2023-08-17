import Link from "next/link";
import React from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { RxCardStack } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { header, ul } from "./header.css";
const Header = () => {
  return (
    <header
      className={header({
        template: "red",
      })}
    >
      <ul className={ul}>
        <li>
          <Link href="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <RxCardStack />
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <FiLogOut />
          </Link>
        </li>
      </ul>
      <ul className={ul}>
        <li>
          <Link href="/login">
            <FaUserAlt />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
