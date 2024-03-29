import Image from "next/image";
import Link from "next/link";

function NextCourse() {
  const courses = [
    {
      title: "React custom hooks",
      startDate: "Finished",
      imgSrc: "/course/code.png",
      completed: true,
    },
    {
      title: "Intro to development",
      startDate: "Finished",
      imgSrc: "/course/pc.png",
      completed: true,
    },
  ];

  return (
    <div id="courses">
      {courses.map(function (course) {
        return (
          <Link
            key={course.title}
            href={course.completed ? "#motion" : "/course"}
          >
            <div
              className="mt-6 hover:scale-110 w-full bg-neutral-800/20 p-4 rounded-lg flex flex-col md:flex-row items-center justify-center transition-transform duration-200 ease-in-out transform hover:scale-105"
              style={{ transition: "transform  0.2s ease-in-out" }}
            >
              <h3
                className={`text-neutral-500 text-xs font-InterBold uppercase mr-3 ${
                  course.completed ? "" : ""
                }  `}
              >
                {course.completed ? null : "Next Course"}
              </h3>
              <div className="flex flex-col md:flex-row gap-x-4 mt-3">
                <Image
                  width={1080}
                  height={1080}
                  className="w-16 h-16 object-cover"
                  src={course.imgSrc}
                  alt="Imagen del curso"
                />
                <div>
                  <h4
                    className={`flex font-InterBlack text-xl dark:text-white text-center md:text-left font-italic`}
                  >
                    {course.title}
                  </h4>
                  <p
                    className={`text-neutral-500 text-center md:text-left ${
                      course.completed ? "line-through" : ""
                    } `}
                  >
                    {course.startDate}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default NextCourse;
