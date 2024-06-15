"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/lib/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-4xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={`/`}>
            <h1 className="text-4xl font-semibold">
              Kabir<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose key={index} asChild>
            <Link
              // close the mobile nav when a link is clicked
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
