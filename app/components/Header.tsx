"use client";

import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <TopBar />
      <NavBar />
    </header>
  );
}