import React from "react";
import IconLink from "../core/IconLink";
import Title from "../core/Title";
import { useTranslation } from "../../hooks/useTranslation";

function Footer() {
  const t = useTranslation();
  return (
    <footer className="py-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Title */}
      <Title title={t.contact} />

      {/* Social Links */}
      <div className="flex space-x-4">
        <IconLink label="Youtube" />
        <IconLink label="Linkedin" />
        <IconLink label="Github" />
      </div>
    </footer>
  );
}

export default Footer;
