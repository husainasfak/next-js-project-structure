import Link from "next/link";
import Sidebar from "./_components/SIdebar";

export default function DashboardLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <section className="flex">
               <Sidebar />
               {children}
          </section>
     );
}
