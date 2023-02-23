import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={"wrapper"}>
        {/* 버튼으로 다른 페이지 이동하기 */}
        <Link href={"tab"}>
          <button>버튼임단ㅇ</button>
        </Link>
      </main>
    </>
  );
}
