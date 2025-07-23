import Content from "./component/content/page";
import Footer from "./component/footer/page";
import Navbar from "./component/navbar/page";
import Search from "./component/searchbar/page";
import SideBar from "./component/sidebar/page";
import { DataProvider } from "./context/page";

export default function Home() {
  return (
    <DataProvider>
      <div>
        <Navbar />
        <Search />
        <div className="flex items-start justify-between gap-5 px-5">
          <div className="w-[20%]">
            <SideBar />
          </div>
          <div className="w-[80%] ">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </DataProvider>
  );
}
