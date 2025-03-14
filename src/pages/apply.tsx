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
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

export default function ApplyPage() {
  const { id } = useParams<{ id: string }>();
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold tracking-tight mb-8">
            Ứng tuyển vị trí {id ? "Developer" : ""}
          </h1>

          {submitted ? (
            <Alert className="bg-green-50 border-green-200 text-green-800">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-600 font-medium">
                Đã gửi thành công!
              </AlertDescription>
            </Alert>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 border rounded-lg shadow-md space-y-4"
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Họ và Tên</Label>
                <Input id="name" placeholder="Nhập họ và tên" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" placeholder="Nhập số điện thoại" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="position">Vị trí ứng tuyển</Label>
                <Select onValueChange={setPosition} defaultValue={position}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn vị trí" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Developer">Developer</SelectItem>
                    <SelectItem value="Designer">Designer</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="cv">Đính kèm CV</Label>
                <Input id="cv" type="file" accept=".pdf" required />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Gửi
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
