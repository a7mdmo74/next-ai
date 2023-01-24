import { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeContext } from '../context/ThemeProvider';

import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex min-h-screen flex-col ${
        theme === 'light' ? 'light' : 'dark'
      }`}
    >
      <Head>
        <title>chatGPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-6 min-h-screen">
        <div className="hidden xl:block col-span-1 h-full bg-[#202123] border-gray-200 px-3 py-2.5 text-white shadow-2xl relative">
          <Sidebar />
        </div>
        <div className="col-span-6 xl:col-span-5 h-full dark:bg-[#343541] relative">
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default Home;
