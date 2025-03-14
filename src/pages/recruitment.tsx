import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  PlusCircle,
  List,
  Grid,
  Briefcase,
  Clock,
  MapPin,
  X,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface JobPost {
  id: number;
  title: string;
  description: string;
  location?: string;
  type?: string;
  postedDate?: string;
}

export default function RecruitmentPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showAddJobForm, setShowAddJobForm] = useState(false);

  const jobPosts: JobPost[] = [
    {
      id: 1,
      title: "Developer",
      description: "Tham gia phát triển sản phẩm công nghệ",
      location: "Hà Nội",
      type: "Toàn thời gian",
      postedDate: "2 ngày trước",
    },
    {
      id: 2,
      title: "Designer",
      description: "Thiết kế giao diện người dùng cho các sản phẩm",
      location: "Hồ Chí Minh",
      type: "Toàn thời gian",
      postedDate: "1 tuần trước",
    },
    {
      id: 3,
      title: "Marketing",
      description: "Xây dựng và triển khai chiến lược marketing",
      location: "Đà Nẵng",
      type: "Bán thời gian",
      postedDate: "3 ngày trước",
    },
    {
      id: 4,
      title: "Product Manager",
      description: "Quản lý và phát triển sản phẩm công nghệ",
      location: "Hà Nội",
      type: "Toàn thời gian",
      postedDate: "Hôm nay",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally add the job to the list
    setShowAddJobForm(false);
  };

  return (
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
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => setShowAddJobForm(true)}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Thêm việc làm
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex">
          {/* Job Listings */}
          <div className={showAddJobForm ? "w-2/3 pr-6" : "w-full"}>
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
                  {jobPosts.map((job) => (
                    <motion.div
                      key={job.id}
                      className="bg-white border border-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-blue-700">
                            {job.title}
                          </h3>
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                            {job.postedDate}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1 text-blue-500" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase
                              size={14}
                              className="mr-1 text-blue-500"
                            />
                            {job.type}
                          </div>
                        </div>
                        <Button
                          asChild
                          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Link to={`/apply/${job.id}`}>Ứng tuyển</Link>
                        </Button>
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
                  {jobPosts.map((job) => (
                    <motion.div
                      key={job.id}
                      className="bg-white border border-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-blue-700">
                              {job.title}
                            </h3>
                            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                              {job.postedDate}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            {job.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin
                                size={14}
                                className="mr-1 text-blue-500"
                              />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase
                                size={14}
                                className="mr-1 text-blue-500"
                              />
                              {job.type}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="mt-4 md:mt-0"
                        >
                          <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            <Link to={`/apply/${job.id}`}>Ứng tuyển</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Add Job Form Panel */}
          <AnimatePresence>
            {showAddJobForm && (
              <motion.div
                className="w-1/3 bg-white p-6 rounded-lg shadow-lg border border-blue-100"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-blue-700">
                    Thêm công việc mới
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowAddJobForm(false)}
                    className="hover:bg-red-50 text-red-500"
                  >
                    <X size={18} />
                  </Button>
                </div>

                <form onSubmit={handleAddJob} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Tên vị trí</Label>
                    <Input id="job-title" placeholder="Nhập tên vị trí" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job-description">Mô tả công việc</Label>
                    <Textarea
                      id="job-description"
                      placeholder="Nhập mô tả công việc"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job-requirements">Yêu cầu</Label>
                    <Textarea
                      id="job-requirements"
                      placeholder="Nhập yêu cầu công việc"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job-salary">Mức lương</Label>
                    <Input id="job-salary" placeholder="10-15 triệu" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    Thêm
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
