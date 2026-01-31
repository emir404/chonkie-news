import React from "react";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="https://chonkie.ai" target="_blank" rel="noopener noreferrer">
      <Image
        src="/logo.svg"
        alt="Chonkie Logo"
        className={className}
        width={128}
        height={128}
      />
    </Link>
  );
};

export default Logo;
