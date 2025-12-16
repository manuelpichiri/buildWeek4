import SectionSearchInput from "./sectionSearch/SectionSearchInput";
import SectionOrderPost from "./sectionOrderPost/SectionOrderPost";
import SectionFeed from "./sectionFeed/SectionFeed";

const MainPage = () => {
  return (
    <div>
      <SectionSearchInput />
      <SectionOrderPost />
      <SectionFeed />
    </div>
  );
};

export default MainPage;
