'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { 
      name: 'Home', 
      href: '/'
    },
    {
      name: 'Products',
      href: '/products'
    },
    { 
      name: 'Brands', 
      href: '/brands'
    },
];
export default function NavLinks() {
  const pathname = usePathname();
return (
    <>
    {links.map((link) => {
        console.log(pathname);
        return (
        <Link
            key={link.name}
            href={link.href}
            className=
            {clsx(
                'text-white px-5 py-3 hover:bg-sky-950 transition duration-500',
                {
                  'border-b-3 border-indigo-500': pathname == link.href,
                },
              )}
        >
            <p className="hidden md:block">{link.name}</p>
        </Link>
        );
    })}
    </>
);
}