import React from "react";
import CourseCard from "../CourseCard";
const Course = () => {
  const courseList = [
    {
      name: "React Native",
      description: " Web Application",
      price: "6000 bath",
    },
    {
      name: "C#",
    description: "OOP",
    price: "5000 bath"
    },
  ];
  return (
  <>
<h1>หลักสูตรที่เปิดสอน</h1>
<hr />
{
courseList.map((b)=>(
<CourseCard key={b.name} {...b} />
))
}
</>
  )
};

export default Course;