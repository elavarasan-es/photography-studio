import FaqAccordions from "../components/FaqAccordian";
import Footer from "./Footer";

function FAQ() {
  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          'url(https://josephinstudiof.in/wp-content/uploads/2022/04/Couple__0078.jpg)',
      }}
    >
      <div className="w-full h-[50vh] flex bg-transparent text-4xl font-oswald text-white font-bold items-center justify-end px-4">
        <div>Frequently Asked Questions</div>
      </div>


      <div className="bg-white px-4 py-8 flex justify-center">
      <FaqAccordions/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default FAQ;
