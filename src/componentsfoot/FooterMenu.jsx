import React from "react";

function FooterMenu() {
  const menuItems = [
    "About",
    "Education & Careers",
    "Events & Attractions",
    "Resources",
    "Contact Us",
  ];

  return (
    <nav className="grow shrink text-white w-[125px]">
      <h2 className="text-3xl font-bold">Menu</h2>
      <ul className="mt-10 w-full text-base underline">
        {menuItems.map((item, index) => (
          <li key={index} className={index > 0 ? "mt-2.5" : ""}>
            <a href="#" aria-label={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterMenu;
