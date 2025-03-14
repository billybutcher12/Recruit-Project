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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, FileDown } from "lucide-react";

interface Applicant {
  id: number;
  name: string;
  phone: string;
  email: string;
  position: string;
  status: "Chưa đánh giá" | "Đậu" | "Trượt";
}

export default function AdminPage() {
  const applicants: Applicant[] = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      phone: "0123456789",
      email: "nguyenvana@example.com",
      position: "Developer",
      status: "Chưa đánh giá",
    },
    {
      id: 2,
      name: "Trần Thị B",
      phone: "0987654321",
      email: "tranthib@example.com",
      position: "Designer",
      status: "Đậu",
    },
    {
      id: 3,
      name: "Lê Văn C",
      phone: "0369852147",
      email: "levanc@example.com",
      position: "Marketing",
      status: "Trượt",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-8">
          Trang quản trị nhân sự
        </h1>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Số ứng viên hôm nay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Số ứng viên tháng này
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">20</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ứng viên đậu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">10</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ứng viên tiềm năng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
            </CardContent>
          </Card>
        </div>

        {/* Simple Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Thống kê ứng viên</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end justify-around">
              {[30, 45, 25, 60, 75].map((height, index) => (
                <div
                  key={index}
                  className="w-12 bg-blue-600 rounded-t-md"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-around mt-2 text-sm text-muted-foreground">
              <div>T2</div>
              <div>T3</div>
              <div>T4</div>
              <div>T5</div>
              <div>T6</div>
            </div>
          </CardContent>
        </Card>

        {/* Applicants Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Danh sách ứng viên</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Họ và Tên</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Vị trí</TableHead>
                  <TableHead>File CV</TableHead>
                  <TableHead>Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.phone}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>{applicant.position}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <FileDown className="h-4 w-4 mr-2" />
                        Tải xuống
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue={applicant.status}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Trạng thái" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Chưa đánh giá">
                            Chưa đánh giá
                          </SelectItem>
                          <SelectItem value="Đậu">Đậu</SelectItem>
                          <SelectItem value="Trượt">Trượt</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Reports Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Báo cáo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Ứng viên trượt
                  </div>
                  <div className="text-2xl font-bold">5</div>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Xuất Excel
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email-settings">
                    Địa chỉ email nhận thông tin
                  </Label>
                  <Input id="email-settings" placeholder="Nhập địa chỉ email" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Lưu</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
