import { useState } from "react";
import down from "../../assets/common/down.svg";
import RoundedTabComponent from "../common/roundedTabComponent";
import BookListView from "../common/BookListView";
import BottomNavbar from "../common/BottomNavbar";
import BookComponent from "../SearchPage/BookComponent";
import cover_img_ex from "../../assets/libraryPage/cover-img-ex.svg";
import BottomSheetModal from "../common/BottomSheetModal";
import BottomSheetMenuComponent from "../common/BottomSheetMenuComponent";
import Divider1 from "../common/Divider1";
import Divider2 from "../common/Divider2";

const BookListPage = ({ view }) => {
  const [sort, setSort] = useState("최신순");
  const [tab, setTab] = useState("");
  const [sortingBottomSheet, setSortingBottomSheet] = useState(false); //최신순, 별점순, 제목순 보여주는 바텀시트 보이는지 여부
  const [visible, setVisible] = useState(false);
  const handleSorting = () => {
    setSortingBottomSheet(true);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-5 w-[24.5625rem] p-4">
          <div
            onClick={handleSorting}
            className="flex items-center justify-center cursor-pointer"
          >
            <div className="text-b2 text-gray-500 whitespace-nowrap">
              {sort}
            </div>
            <img className="w-4 h-4" src={down} alt="down" />
          </div>
          <div className="overflow-x-auto">
            <RoundedTabComponent
              type="secondary"
              tabs={["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"]}
              activeTab={tab}
              onTabClick={setTab}
            />
          </div>
        </div>
        {view === "list" && (
          <div className="h-[40rem] overflow-y-auto ">
            <BookListView />
            <BookListView />
            <BookListView />
            <BookListView />
            <BookListView />
            <BookListView />
            <div className="h-[6rem] bg-transparent"></div>
          </div>
        )}
        {view === "cover" && (
          <div className="h-[40rem] mx-4  overflow-y-auto">
            <div className="grid grid-cols-3 place-items-center gap-x-3 gap-y-5">
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="3"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
            </div>
            <div className="h-[6rem] bg-transparent"></div>
          </div>
        )}
      </div>
      <BottomNavbar />
      {sortingBottomSheet && (
        <BottomSheetModal
          bottomSheetShow={sortingBottomSheet}
          setBottomSheetShow={setSortingBottomSheet}
          visible={visible}
          setVisible={setVisible}
        >
          <div className="pb-[1.88rem]">
            <div
              onClick={() => setSort("최신순")}
              className={`flex items-center h-12 pt-1 pb-3 text-b2 ${
                sort === "최신순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              최신순
            </div>
            <Divider2 />
            <div
              onClick={() => setSort("별점순")}
              className={`h-12 py-3 text-b2 ${
                sort === "별점순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              별점순
            </div>
            <Divider2 />

            <div
              onClick={() => setSort("제목순")}
              className={`h-12 py-3 text-b2 ${
                sort === "제목순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              제목순
            </div>
          </div>
        </BottomSheetModal>
      )}
    </>
  );
};
export default BookListPage;
