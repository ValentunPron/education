import Image from "next/image";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <>
        <h1 className="mainTitle">Привіт!</h1>
        <h2 className="subTitle">Я тут завжди</h2>
        <button className="button">Увійти</button>
        <button className="button-select">Front End</button>
        <button className="button-select active">Кібербезпека</button>

        <div className="search">
          <button className="hover:scale-125 transition-all">
            <Search />
          </button>
          <input 
            type="text"
            placeholder="Пошук курсів..." 
            className="w-full focus:ring-0 focus:outline-none"
          />
        </div>
      </>
  );
}
