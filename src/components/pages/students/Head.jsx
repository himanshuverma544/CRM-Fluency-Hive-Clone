export default function Head({ totalStudents }) {
  
  return (
    <section id="head" className="head w-full flex justify-between items-center px-5 py-5 md:px-10">
      <div className="heading text-xl font-semibold md:text-2xl xl:text-3xl">
        Students
      </div>
      <div className="enrolled-students px-3 py-2 rounded-lg font-semibold bg-primaryOrange text-white md:text-xl xl:text-2xl">
        {`${totalStudents}+ Enrolled`}
      </div>
    </section>
  );
}
