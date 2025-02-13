import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
// import Placements from "../Pages/Placements";
import Institution from "../Pages/Institution";
// import InstituteLife from "../Pages/InstituteLife";
import Blog from "../Pages/Blog";
import CourseDetailPage from "../Pages/CourseDetailPage";
import InstituteDetailPage from "../Pages/InstitutionDetailPageMain";

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            {/* <Route path="/placements" element={<Placements />} /> */}
            <Route path="/institution" element={<Institution />} />
            {/* <Route path="/institute-life" element={<InstituteLife/>} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/:id/coursedetail" element={<InstituteDetailPage />} />
            <Route
                path="/:id/institutiondetail"
                element={<CourseDetailPage />}
            />
        </Routes>
    );
};

export default RouterPage;
