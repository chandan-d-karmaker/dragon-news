import NewsCategories from "@/components/homepage/LeftSideBar/NewsCategories";
import FindUsOn from "@/components/homepage/RightSideBar/FindUsOn";
import Login from "@/components/homepage/RightSideBar/Login";
import Qzone from "@/components/homepage/RightSideBar/Qzone";

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
        <NewsCategories categories={categories} id={categories}/>
      </div>
      <div className="text-xl font-semibold text-[#403F3F] mb-5 col-span-2">
        All news
      </div>
      <div className="space-y-4">
        <Login/>
        <FindUsOn/>
        <Qzone/>
      </div>
    </div>
  );
}
