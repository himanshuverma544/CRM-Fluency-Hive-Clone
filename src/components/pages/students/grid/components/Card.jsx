import Avatar from "../../../../utils/Avatar";
import Divider from "../../../../utils/Divider";

import { CiTimer } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

import { faker } from '@faker-js/faker';


export default function Card({ student }) {
  
  return (
    <div className="student-card w-[95%] flex flex-col items-center justify-center p-10 gap-3 rounded-lg bg-primaryLight sm:w-[17rem]">

      <Avatar className="profile-picture" size={200} src={faker.image.url()} alt={student.name}/>

      <div className="name text-xl font-semibold">
        {student.name}
      </div>

      <Divider className="w-[90%]"/>

      <div className="course-duration flex items-center gap-3">
        <CiTimer className="icon stroke-1"/>
        <div className="text-wrapper">
          <div className="label">
          </div>
          <div className="value">
            {student.courseDuration}
          </div>
        </div>
      </div>

      <div className="course-completion flex items-center gap-3">
        <GiProgression className="icon"/>
        <div className="text">
          {`${student.courseCompletion}%`}
        </div>
      </div>

      <div className="fee-status flex items-center gap-3">
        <RiMoneyRupeeCircleLine className="icon"/>
        <div className="text capitalize">
          {student.feeStatus}
        </div>
      </div>

      <div className="classes-attend flex items-center gap-3">
        <MdAirlineSeatReclineNormal className="icon"/>
        <div className="text">
          {`${student.classesAttend} Days`}
        </div>
      </div>
    </div>
  );
}
