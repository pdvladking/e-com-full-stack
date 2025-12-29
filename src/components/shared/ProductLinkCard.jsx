"use client";
import Link from "next/link";

export default function ProductLinkCard({ name, href }) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <span className="text-base">{name}</span>
      <Link
      href={href}
      className="text-sm underline text-neutral-600 hover:text-black transition"
      >
        View
      </Link>
    </div>
  )
}