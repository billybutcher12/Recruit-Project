import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Pencil, ArrowUp, Users } from "lucide-react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pt-16">
      {/* Hero Banner */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Office team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Chào mừng đến với XYZ Corp
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-center max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Cùng chúng tôi xây dựng tương lai!
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Why Choose Us Section */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
            variants={itemVariants}
          >
            Tại sao chọn chúng tôi
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={itemVariants}
          >
            XYZ Corp là đối tác lý tưởng cho sự phát triển nghề nghiệp của bạn
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Pencil className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700 text-center">
              Môi trường sáng tạo
            </h3>
            <p className="text-muted-foreground text-center">
              Chúng tôi khuyến khích sự sáng tạo và đổi mới trong mọi dự án,
              giúp bạn phát huy tối đa tiềm năng.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <ArrowUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700 text-center">
              Cơ hội phát triển
            </h3>
            <p className="text-muted-foreground text-center">
              Chúng tôi cung cấp các cơ hội học tập và phát triển liên tục, giúp
              bạn tiến xa hơn trong sự nghiệp.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700 text-center">
              Đội ngũ chuyên nghiệp
            </h3>
            <p className="text-muted-foreground text-center">
              Làm việc cùng những chuyên gia hàng đầu trong ngành, học hỏi và
              phát triển trong môi trường chuyên nghiệp.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="py-16 bg-blue-600 rounded-xl shadow-xl mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sẵn sàng khám phá cơ hội mới?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Tìm kiếm vị trí phù hợp với kỹ năng và đam mê của bạn trong danh
              sách việc làm đa dạng của chúng tôi.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-y-[-3px] shadow-lg hover:shadow-xl px-8 py-6 text-lg"
              >
                <Link to="/recruitment">Khám phá việc làm</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full py-4 bg-gray-100 text-center text-gray-600 text-sm">
        © 2025 XYZ Corp
      </div>
    </div>
  );
}
