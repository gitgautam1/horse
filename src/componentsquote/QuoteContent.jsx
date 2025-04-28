import React from "react";

function QuoteContent() {
  return (
    <div className="min-w-60 w-[612px] max-md:max-w-full">
      <div className="w-full text-3xl max-md:max-w-full max-sm:text-sm">
        <p className="max-md:max-w-full">
          Quote source Bodoni 72 Book italic 30px lorem ipsum{" "}
        </p>
        <p className="max-md:max-w-full">
          dolor sit amet, consectetur adipiscing elit, sed eiusmod{" "}
        </p>
        <p className="max-md:max-w-full">
          tempor amet incididunt ut labore et dolore magna aliqu{" "}
        </p>
        <p className="max-md:max-w-full">lenim ad.</p>
      </div>
      <footer className="mt-16 text-base max-md:mt-10 max-md:max-w-full">
        NAme Here{" "}
        <span style={{ fontWeight: 700, color: "rgba(49,79,166,1)" }}>
          {" "}
          | Title, Company Here
        </span>
      </footer>
    </div>
  );
}

export default QuoteContent;
