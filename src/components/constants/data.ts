// This file contains constants and data used across the portfolio template. 
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Milan Kumar",
  title: "Data Scientist",
  location: "Gurugram, India",
  email: "milankushwaha7644@gmail.com",
  description: [
    "Hi! I'm Milan, a passionate Data Scientist with a love for turning data into insights. I enjoy building projects that solve real-world problems and sharing my coding journey with the community.",
    "i have a strong foundation in Python, ML, and data visualization, and I'm always eager to learn new technologies and improve my skills.",
    "when I'm not coding, you can find me exploring new cafes, playing video games, or binge-watching tech documentaries. I'm excited to connect with like-minded individuals and collaborate on interesting projects!",
  ],
  profileImage: "/milanbhaiya.jpeg", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "kush-milan",
  leetcodeUsername: "milan4907", // remove or keep blank if you don't have a LeetCode profile
  hashnodeUsername: "", // add your Hashnode username here to display blogs, or leave blank to hide blog section
};

export const SOCIAL_LINKS = {
  github: "https://github.com/kush-milan",
  linkedin: "https://www.linkedin.com/in/milan-kushwaha-60aa67318?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "", // add your X (Twitter) URL here or leave blank to hide
  leetcode: "https://leetcode.com/u/milan4907/",
  peerlist: "", // add your Peerlist URL here or leave blank to hide
  instagram: "https://www.instagram.com/_kush.milan/",
  blog: "", // add your blog URL here or leave blank to hide
  email: "milankushwaha7644@gmail.com",
  resume: "", // add your resume link here
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = { // Keep only the skills you want to showcase and remove the rest
  
  databases: [
    "MongoDB", "MySQL", "powerBI"
  ],
  languages: [
    "Python", "R", "SQL", "JavaScript","java"
  ],
  
  tools: [
    "VS Code", "Git", "GitHub", "GitLab", "Windows", "excel"
  ],
};

export const PROJECTS = [
  {
    name: "Zamato Data Analysis",
    highlightImage: "/projects/zomato-highlight.svg",
    description: "This project analyzes Zomato restaurant data to understand customer behavior, restaurant performance, ratings, votes, and online/offline ordering trends. Using Data Analysis and Visualization techniques, the project finds useful insights from restaurant datasets.",
    tech: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/kush-milan/Zomato-Data-Analysis-Project.git",
  },
  {
    name: "Vendor Performance Analysis",
    highlightImage: "/projects/vendor-highlight.svg",
    description: "This project analyzes vendor performance data to evaluate and compare the performance of different vendors based on various metrics such as delivery time, customer ratings, and order volume. The analysis helps identify top-performing vendors and areas for improvement.",
    tech: ["SQL", "Python", "Pandas", "Matplotlib", "powerBI"],
    github: "https://github.com/kush-milan/-Vendor-Performance-Analysis-project.git",
  },
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    company: "Codec Technologies",
    companyLink: "https://www.bing.com/ck/a?!&&p=94646b0e2745af7459e2fb600d52709db490ed2f9330aee19439b11354ed5c35JmltdHM9MTc3ODcxNjgwMA&ptn=3&ver=2&hsh=4&fclid=0229fd39-d7ad-6a36-0809-ea61d6b86b03&psq=CodecTechnologies&u=a1aHR0cHM6Ly9jb2RlY3RlY2hub2xvZ2llcy5pbi8",
    role: "Project Intern",
    period: "Nov 2025 - Jan 2026",
    location: "Remote/Location",
    description: "Worked on a project to analyze and visualize data related to customer behavior and sales trends. Utilized Python libraries such as Pandas and Matplotlib to clean, analyze, and visualize the data, providing insights that helped improve business strategies.",
    skills: ["Python", "SQL", "Data Analysis", "Data Visualization"],
  },
  // Add more experience as needed
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "MDU University, Rohtak",
    institutionLink: "https://mdu.ac.in/",
    period: "2022 - 2026",
    score: "7.0 GPA",
  },
  // Add more education as needed
];