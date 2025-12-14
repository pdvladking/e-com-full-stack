"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 40 }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/rawh.svg"
        alt="Eden Tattoo Nepal Logo"
        width={size}
        height={size}
        priority
        className="rounded-full"
      />
    </Link>
  );
}