import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import Layout from "./components/layout";

// Lazy load pages
const HomePage = lazy(() => import("./pages/home"));
const RecruitmentPage = lazy(() => import("./pages/recruitment"));
const RegisterPage = lazy(() => import("./pages/register"));
const LoginPage = lazy(() => import("./pages/login"));
const AdminPage = lazy(() => import("./pages/admin"));
const ApplyPage = lazy(() => import("./pages/apply"));
const ContactPage = lazy(() => import("./pages/contact"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/apply/:id" element={<ApplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
