
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const menuItems = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/gallery',
        title: 'Gallery',
    }
];

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const path = usePathname();
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex flex-col md:flex-row flex-1'>
                <aside className="bg-gray-300 w-full md:w-60">
                    <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link href={href} className={`flex p-2 bg-fuchsia-50 rounded hover:bg-fuchsia-200 cursor-pointer  
                    ${path === href && 'bg-fuchsia-600 text-white'}`}>
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}
