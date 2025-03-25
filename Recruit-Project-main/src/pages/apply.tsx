import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ApplyPage() {
  const { id } = useParams<{ id: string }>();
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState("");
  const [job, setJob] = useState<{ title: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Vui lòng đăng nhập để tiếp tục.");
      navigate("/login");
      return;
    }

    const fetchJob = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            setError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
            localStorage.removeItem("token");
            navigate("/login");
            return;
          }
          const errorText = await response.text();
          throw new Error(errorText || "Không thể lấy thông tin công việc");
        }

        const data = await response.json();
        setJob(data);
        setPosition(data.title);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Có lỗi xảy ra khi kết nối đến server.");
        console.error("Lỗi khi lấy thông tin công việc:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("job_id", id!);
    formData.append("position", position);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Vui lòng đăng nhập để ứng tuyển.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Không thể gửi đơn ứng tuyển");
      }

      setSubmitted(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Có lỗi xảy ra khi gửi đơn ứng tuyển.");
      console.error("Lỗi khi gửi ứng tuyển:", error);
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-500">Đang tải...</p>;
  }

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold tracking-tight mb-8">
            Ứng tuyển vị trí {job ? job.title : "Không xác định"}
          </h1>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {submitted ? (
            <Alert className="bg-green-50 border-green-200 text-green-800">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-600 font-medium">
                Đã gửi đơn ứng tuyển thành công!
              </AlertDescription>
            </Alert>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 border rounded-lg shadow-md space-y-4"
            >
              <div className="grid gap-2">
                <Label htmlFor="full_name">Họ và Tên</Label>
                <Input
                  id="full_name"
                  name="full_name"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="position">Vị trí ứng tuyển</Label>
                <Select onValueChange={setPosition} value={position}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn vị trí" />
                  </SelectTrigger>
                  <SelectContent>
                    {job && <SelectItem value={job.title}>{job.title}</SelectItem>}
                    <SelectItem value="Designer">Designer</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="cv">Đính kèm CV</Label>
                <Input id="cv" name="cv" type="file" accept=".pdf" required />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Gửi đơn ứng tuyển
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}