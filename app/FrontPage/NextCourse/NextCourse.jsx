import Image from "next/image";

function NextCourse() {
  const course = {
    title: "Intro to web development",
    startDate: "10/23/2023",
    imgSrc: "/course/course.jpg",
  };

  return (
    <div>
      <div
        className="mt-6 hover:scale-110 w-full bg-neutral-800/20 p-4 rounded-lg flex items-center justify-center"
        style={{ transition: "transform 0.2s ease-in-out" }}
      >
        <h3 className="text-neutral-500 text-xs font-InterBold uppercase mr-3">
          Next Course
        </h3>
        <div className="flex gap-x-4 mt-3">
          <Image
            width={1080}
            height={1080}
            className="w-16 h-16 object-cover"
            src={course.imgSrc}
            alt="Imagen del curso"
          />
          <div>
            <h4 className="font-extrabold font-InterBlack text-xl dark:text-white text-center">
              {course.title}
            </h4>
            <p className="text-neutral-500 text-start">
              Starting: {course.startDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextCourse;
