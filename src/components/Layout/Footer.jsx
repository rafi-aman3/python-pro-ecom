import React from "react";
import FooterLink from "./FooterLink";
import { companyPagesData, legalPagesData } from "../../utils/footerData";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-white text-[#252422] p-10">
      <aside>
        <h1 className=" text-6xl text-[#EB5E28]">GG</h1>
        <p>Providing reliable tech since 2024</p>
      </aside>
      <nav></nav>
      <nav>
        <h6 className=" text-[#403D39] underline">Company</h6>
        {companyPagesData?.map((item, indx) => (
          <FooterLink key={indx} text={item.text} href={item.href} />
        ))}
      </nav>
      <nav>
        <h6 className="text-[#403D39] underline">Legal</h6>
        {legalPagesData?.map((item, indx) => (
          <FooterLink key={indx} text={item.text} href={item.href} />
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
