import Link from "next/link";

export default function DashboardLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <section className="flex">
               <nav className="h-screen w-1/4 bg-gray-300 p-4">
                    <ul>
                         <li className="mb-4">
                              <Link href="/dashboard/blog/123">
                                   <p className="font-semibold">Blog</p>
                              </Link>
                         </li>
                    </ul>
               </nav>
               {children}
          </section>
     );
}
