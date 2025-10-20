import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="py-8 px-16 h-[90vh] flex gap-10 items-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
