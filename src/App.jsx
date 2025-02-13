import RouterPage from "./component/RouterPage";
import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import ScrollToTop from "./Pages/ScrollToTop";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <RouterPage />
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
