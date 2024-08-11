import Card from "./components/Card";


export default function Grid({ students }) {

  return (
    <section id="students-grid" className="flex flex-wrap justify-center items-center gap-5 px-5 py-5 md:px-10">
      {students.map(student => 
        <Card key={student.id} student={student}/>
      )}
    </section>
  );
}
