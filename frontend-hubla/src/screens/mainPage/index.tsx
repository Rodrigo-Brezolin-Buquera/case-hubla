import FileUpload from "./components/FileUpload";
import SellerSelection from "./components/SellerSelection";
import TransactionSection from "./components/TrasactionSection";

const MainPage = () => {

  return (
    <>
      <main>
        <FileUpload/>
        <TransactionSection/>
        <SellerSelection/>
      </main>
    </>
  );
};

export default MainPage;
