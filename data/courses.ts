export type Course = {
  id: number;
  title: string;
  image: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  category: string;
};

export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts",
  "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity",
  "Web Development", "Data Science", "Cooking",
];

export const courseAvatars = ["/hero/avatars/1.png", "/hero/avatars/2.png", "/hero/avatars/3.png"];

const base = { author: "pureplexl studio", rating: 4.5, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Beginner" as const, price: 25 };

export const courses: Course[] = [
  { ...base, id: 1, title: "Learn Figma from Basic", image: "/images/courses/figma.jpg", category: "UI/UX Design" },
  { ...base, id: 2, title: "Build Digital Asset", image: "/images/courses/digital-asset.jpg", category: "Graphic Design" },
  { ...base, id: 3, title: "The Power of Big Data", image: "/images/courses/big-data.jpg", category: "Data Science" },
  { ...base, id: 4, title: "Balancing Productivity and Wellbeing", image: "/images/courses/productivity.jpg", category: "Productivity" },
  { ...base, id: 5, title: "Mastering Money Management", image: "/images/courses/money.jpg", category: "Freelance & Entrepreneurship" },
  { ...base, id: 6, title: "From Idea to Startup Success", image: "/images/courses/startup.jpg", category: "Freelance & Entrepreneurship" },
];