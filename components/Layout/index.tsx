import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F5EDE0] dark:bg-[#2c261f] transition duration-500 px-5">
      <div className='mx-auto max-w-2xl min-h-screen '>
        <Header />
        <main className="animate-fade-in-up">{ children }</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
