import Link from "next/link";

export default function Home() {
  return (
    <main className="m-8">
      <button className="text-xl border-b-2 border-black cursor-pointer">
        <Link href={'/dashboard'}>
          Go to Dashboard
        </Link>
      </button>
    </main>
  );
}
