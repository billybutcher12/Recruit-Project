// RecruitmentPage.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { List, Grid, Briefcase, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationBar from "@/components/ui/navigation-bar";

interface JobPost {
  id: number;
  title: string;
  description: string;
  salary?: string;
  requirements?: string;
  location?: string;
  type?: string;
  postedDate?: string;
  details?: string;
}

export default function RecruitmentPage() {
  const [user, setUser] = useState<{ role: string } | null>(null);
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("http://localhost:5000/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            console.error("Không thể lấy thông tin người dùng");
          }
        } catch (error) {
          console.error("Lỗi khi lấy thông tin người dùng:", error);
        }
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Vui lòng đăng nhập để xem danh sách công việc.");
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch("http://localhost:5000/api/jobs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Không thể tải danh sách công việc: ${errorText}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message || "Có lỗi xảy ra khi kết nối đến server.");
        console.error("Lỗi khi lấy danh sách công việc:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div>
      <NavigationBar />
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pt-16">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Cơ hội việc làm
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex bg-muted rounded-md p-1">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid size={20} className="text-blue-600" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List size={20} className="text-blue-600" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="flex">
            <div className="w-full">
              {isLoading ? (
                <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : jobs.length === 0 ? (
                <p className="text-center text-gray-500">Không có công việc nào hiện tại.</p>
              ) : (
                <AnimatePresence mode="wait">
                  {viewMode === "grid" ? (
                    <motion.div
                      key="grid"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: 20 }}
                    >
                      {jobs.map((job) => (
                        <motion.div
                          key={job.id}
                          className="bg-white border border-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                {job.postedDate}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-2">{job.description}</p>
                            <p className="text-sm text-gray-500 mb-2">Lương: {job.salary}</p>
                            <p className="text-sm text-gray-500 mb-4">Yêu cầu: {job.requirements}</p>
                            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                              {job.location && (
                                <div className="flex items-center">
                                  <MapPin size={14} className="mr-1 text-blue-500" />
                                  {job.location}
                                </div>
                              )}
                              {job.type && (
                                <div className="flex items-center">
                                  <Briefcase size={14} className="mr-1 text-blue-500" />
                                  {job.type}
                                </div>
                              )}
                            </div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                asChild
                                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                              >
                                <Link to={`/apply/${job.id}`}>Ứng tuyển ngay</Link>
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="list"
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: 20 }}
                    >
                      {jobs.map((job) => (
                        <motion.div
                          key={job.id}
                          className="bg-white border border-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                        >
                          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                  {job.postedDate}
                                </span>
                              </div>
                              <p className="text-muted-foreground mb-2">{job.description}</p>
                              <p className="text-sm text-gray-500 mb-2">Lương: {job.salary}</p>
                              <p className="text-sm text-gray-500 mb-4">Yêu cầu: {job.requirements}</p>
                              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                {job.location && (
                                  <div className="flex items-center">
                                    <MapPin size={14} className="mr-1 text-blue-500" />
                                    {job.location}
                                  </div>
                                )}
                                {job.type && (
                                  <div className="flex items-center">
                                    <Briefcase size={14} className="mr-1 text-blue-500" />
                                    {job.type}
                                  </div>
                                )}
                              </div>
                            </div>
                            <motion.div whileHover={{ scale: 1.05 }} className="mt-4 md:mt-0">
                              <Button
                                asChild
                                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                              >
                                <Link to={`/apply/${job.id}`}>Ứng tuyển ngay</Link>
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}