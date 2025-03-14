import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  KeyRound,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("candidate");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-semibold tracking-tight text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
            variants={itemVariants}
          >
            Đăng ký tài khoản
          </motion.h1>

          <motion.div variants={itemVariants}>
            <Tabs
              defaultValue="candidate"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="candidate"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <User className="h-4 w-4" /> Ứng viên
                </TabsTrigger>
                <TabsTrigger
                  value="hr"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <UserCheck className="h-4 w-4" /> Nhân sự (HR)
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="candidate"
                className="p-8 border border-blue-100 rounded-lg shadow-lg bg-white"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.h2
                    className="text-2xl font-semibold mb-6 text-blue-700"
                    variants={itemVariants}
                  >
                    Đăng ký tài khoản ứng viên
                  </motion.h2>
                  <form className="space-y-6">
                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label htmlFor="candidate-name" className="text-blue-800">
                        Họ và Tên
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="candidate-name"
                          placeholder="Nhập họ và tên"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label
                        htmlFor="candidate-email"
                        className="text-blue-800"
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="candidate-email"
                          type="email"
                          placeholder="Nhập email"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label
                        htmlFor="candidate-password"
                        className="text-blue-800"
                      >
                        Mật khẩu
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="candidate-password"
                          type="password"
                          placeholder="Nhập mật khẩu"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label
                        htmlFor="candidate-confirm-password"
                        className="text-blue-800"
                      >
                        Xác nhận mật khẩu
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <ShieldCheck className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="candidate-confirm-password"
                          type="password"
                          placeholder="Nhập lại mật khẩu"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                      >
                        Đăng ký
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </TabsContent>

              <TabsContent
                value="hr"
                className="p-8 border border-blue-100 rounded-lg shadow-lg bg-white"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.h2
                    className="text-2xl font-semibold mb-6 text-blue-700"
                    variants={itemVariants}
                  >
                    Đăng ký tài khoản nhân sự
                  </motion.h2>
                  <form className="space-y-6">
                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label htmlFor="hr-name" className="text-blue-800">
                        Họ và Tên
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="hr-name"
                          placeholder="Nhập họ và tên"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label htmlFor="hr-code" className="text-blue-800">
                        Mã nhân sự
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <KeyRound className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="hr-code"
                          placeholder="Nhập mã nhân sự"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label htmlFor="hr-email" className="text-blue-800">
                        Email
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="hr-email"
                          type="email"
                          placeholder="Nhập email"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label htmlFor="hr-password" className="text-blue-800">
                        Mật khẩu
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="hr-password"
                          type="password"
                          placeholder="Nhập mật khẩu"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="grid gap-3" variants={itemVariants}>
                      <Label
                        htmlFor="hr-confirm-password"
                        className="text-blue-800"
                      >
                        Xác nhận mật khẩu
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <ShieldCheck className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="hr-confirm-password"
                          type="password"
                          placeholder="Nhập lại mật khẩu"
                          className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                      >
                        Đăng ký
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
