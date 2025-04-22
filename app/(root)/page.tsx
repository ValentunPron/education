import SearchForm from "@/components/SearchForm";

export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {
  const query =  (await searchParams).query;

  return (
    <>
        <h1 className="mainTitle">Привіт!</h1>
        <h2 className="subTitle">Я тут завжди</h2>
        <button className="button">Увійти</button>
        <button className="button-select">Front End</button>
        <button className="button-select active">Кібербезпека</button>

        <SearchForm query={query}/>
      </>
  );
}
