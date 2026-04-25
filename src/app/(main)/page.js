const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {

  const categories = await getCategories();

  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">All categories</h2>
       <ul className="flex flex-col gap-4">
        {
          categories.map(item => <li key={item.category_id} item={item} className="text-xl bg-[#E7E7E7] p-4 rounded-sm font-medium text-center">
            {item.category_name}
          </li>)
        }
       </ul>
      </div>
      <div className="font-bold text-5xl bg-red-500 col-span-2">
        All news
      </div>
      <div className="font-bold text-5xl bg-purple-300">
        All social
      </div>
    </div>
  );
}
