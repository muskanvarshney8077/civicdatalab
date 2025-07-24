import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Search from "./component/searchbar/SearchBar";
import SideBar from "./component/sidebar/Sidebar";
import { DataProvider } from "./context/Context";

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
