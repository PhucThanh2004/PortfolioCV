export const profile = {
  name: "La Nguyen Phuc Thanh",
  shortName: "Thanh",
  role: "Backend Developer",
  tagline: "Sinh viên Công nghệ Thông tin",
  about:
    "Mình là sinh viên Công nghệ Thông tin tại Trường Đại Học Công nghệ Kỹ thuật TP.HCM, đang tìm vị trí Fresher Backend Developer/Intern Developer. Mình nắm được kiến thức về lập trình hướng đối tượng, cấu trúc dữ liệu, thuật toán, quản trị cơ sở dữ liệu và phát triển web với Java + React. Mục tiêu dài hạn: trở thành Fullstack Developer có thể thiết kế, phát triển, kiểm thử và triển khai ứng dụng doanh nghiệp.",
  email: "lathanhbatri2020@gmail.com",
  phone: "0931113867",
  location: "Ho Chi Minh City, Vietnam",
  github: "https://github.com/PhucThanh2004",
  linkedin:
    "https://www.linkedin.com/in/la-nguy%E1%BB%85n-ph%C3%BAc-th%C3%A0nh-7862783ba/",
  avatar: "/avatar.jpg",
};

export const stats = [
  { to: 2, suffix: "+", decimals: 0, label: "Năm học & thực hành" },
  { to: 2, suffix: "+", decimals: 0, label: "Dự án học thuật" },
  { to: 8.08, suffix: "", decimals: 2, label: "GPA (trên thang 10)" },
];

export const stackHighlights = [
  "Java",
  "Spring Boot",
  "ReactJS",
  "MySQL",
  "Docker",
];

export const skillNotes: Record<string, string> = {
  Java: "Java Core, OOP, Spring Boot, Spring MVC – xây dựng ứng dụng web và dự án học thuật.",
  "Front-end":
    "ReactJS, JavaScript, HTML, CSS, jQuery – dựng giao diện và tích hợp RESTful API.",
  Database: "SQL, MySQL – thiết kế cơ sở dữ liệu cơ bản và thao tác dữ liệu.",
  "Version Control": "Git, GitHub, GitLab – làm việc nhóm và quản lý mã nguồn.",
  DevOps: "Docker, GitHub Actions – đóng gói và tự động hoá quy trình.",
};

export const skillGroups = [
  {
    title: "Java",
    items: [
      "Java Core",
      "OOP",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
    ],
  },
  {
    title: "Front-end",
    items: ["ReactJS", "JavaScript", "HTML", "CSS", "jQuery", "Tailwind CSS"],
  },
  { title: "Database", items: ["SQL", "MySQL", "SQL Server"] },
  { title: "Version Control", items: ["Git", "GitHub", "GitLab"] },
  { title: "DevOps", items: ["Docker", "GitHub Actions"] },
];

export const projects = [
  {
    name: "EduCentre",
    subtitle: "Hệ thống quản lý trung tâm gia sư",
    type: "Website · Dự án học thuật",
    image: "/eduhomepage.jpg",
    period: "01/2026 – 07/2026",
    tech: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "Tailwind CSS",
      "MySQL",
      "RESTful API",
    ],
    highlights: [
      "Tham gia phân tích yêu cầu và phát triển website quản lý trung tâm gia sư.",
      "Xây dựng backend Spring Boot, triển khai RESTful API theo mô hình client-server.",
      "Xây dựng giao diện responsive bằng ReactJS và Tailwind CSS.",
      "Triển khai xác thực người dùng và phân quyền theo vai trò.",
      "Thiết kế và quản lý cơ sở dữ liệu MySQL.",
    ],
    learned:
      "Nắm quy trình phát triển ứng dụng web hoàn chỉnh và cách tích hợp frontend – backend qua REST API.",
  },
  {
    name: "EcoVeggie",
    subtitle: "Ứng dụng bán nông sản",
    type: "Android · Dự án học thuật",
    image: "/ecohomepage.jpg",
    period: "01/2025 – 05/2025",
    tech: ["Android (Java)", "Spring Boot", "RESTful API", "SQL Server"],
    highlights: [
      "Phát triển ứng dụng Android cho phép duyệt và mua nông sản.",
      "Xây dựng backend Spring Boot cung cấp RESTful API cho ứng dụng di động.",
      "Tích hợp Android client với dịch vụ backend.",
      "Thiết kế CSDL SQL Server cho sản phẩm, người dùng và đơn hàng.",
      "Hoàn thiện các tính năng chính: duyệt sản phẩm, quản lý người dùng, xử lý đơn hàng.",
    ],
    learned:
      "Có kinh nghiệm làm ứng dụng di động với hệ thống backend riêng và kiến trúc client-server.",
  },
];

export const process = [
  {
    title: "Khám phá & Phân tích Yêu cầu",
    text: "Xác định rõ phạm vi, phân tích nghiệp vụ và thống nhất các tiêu chí chấp nhận với các bên liên quan.",
  },
  {
    title: "Thiết kế Hệ thống & Kiến trúc",
    text: "Thiết kế cơ sở dữ liệu, API, kiến trúc client-server và lựa chọn công nghệ phù hợp.",
  },
  {
    title: "Phát triển & Tích hợp",
    text: "Code backend, frontend và tích hợp chúng qua REST API, đảm bảo các thành phần hoạt động liền mạch.",
  },
  {
    title: "Kiểm thử, Triển khai & Bàn giao",
    text: "Kiểm thử toàn diện, đóng gói bằng Docker, thiết lập CI/CD và bàn giao sản phẩm hoàn chỉnh.",
  },
];

export const education = {
  school: "Trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí Minh",
  major: "Công nghệ Thông tin",
  period: "2022 – nay",
  details: ["GPA: 8.08/10", "Xếp loại học lực: Giỏi"],
};

export const strengths = [
  "Kỷ luật, tuân thủ nội quy làm việc.",
  "Có trách nhiệm, chăm chỉ, học nhanh và đảm bảo đúng hạn.",
];
