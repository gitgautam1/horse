import React from "react";

function FooterSocial() {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f0184e48c82da9d32fbf2e0937d992076f9c2d?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/47ddaef5b497bdae13c6b8b2a9f4579496914a21?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b746f80e673ad449bebc8e0006568c785a614ee?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1bf2d24775b70340c95052a9ce9a72ea173bfbb?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97",
      alt: "YouTube",
    },
  ];

  return (
    <section className="grow shrink min-w-60 w-[289px]">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-white">
          Follow Along{" "}
          <span
            style={{ fontSize: "25px", color: "rgba(255,255,255,1)" }}
          ></span>
          <span
            style={{ fontSize: "23px", color: "rgba(255,255,255,1)" }}
          ></span>
        </h2>
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full">
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" aria-label={`Visit our ${icon.alt} page`}>
              <img
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 aspect-square w-[150px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSocial;
