import React from 'react';

import Select from "../../utils/Select";

import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";


const feeStatusOptions = [
  "Fee Status",
  "Pending",
  "Deposited"
];

const [feeStatus, pending, deposited] = feeStatusOptions;


const courseDurationOptions = [
  "Course Duration",
  "Month",
  "Year"
];

const [courseDuration, month, year] = courseDurationOptions;


export default function Filter({ originalStudents, setStudents }) {


  const [searchValue, setSearchValue] = React.useState('');


  const sortByAlphabetically = () => {
    setStudents(prev => prev.toSorted((prevValue, nextValue) =>
      prevValue.name < nextValue.name ? -1 : prevValue.name > nextValue.name ? 1 : 0
    ));
  }

  React.useEffect(() => {
    sortByAlphabetically();
  }, []);


  const handleSearch = event => {

    const searchedKeyword = event.target.value;
    setSearchValue(searchedKeyword);

    if(searchValue.length <= 1) {
      setStudents(originalStudents);
    }
    else {
      setStudents(prev => {
        const matchedStudents = prev.filter(
          student => student.name.toLowerCase().includes(searchedKeyword.toLowerCase())
        );
        return matchedStudents;
      });
    }
    sortByAlphabetically();
  }


  const handleSortOrder = () => 
    setStudents(prev => prev.toReversed());


  const handleFeeStatus = option => {

    switch(option) {

      case month:
        const pendingStudents = originalStudents.filter(
          student => student.feeStatus.toLowerCase().includes(pending.toLowerCase())
        );
        setStudents(pendingStudents);
        break;

      case year:
        const depositedStudents = originalStudents.filter(
          student => student.feeStatus.toLowerCase().includes(deposited.toLowerCase())
        );
        setStudents(depositedStudents);
        break;

      default:
        setStudents(originalStudents);
    }
    sortByAlphabetically();
  }


  const handleCourseDuration = option => {

    switch(option) {

      case month:
        const monthStudents = originalStudents.filter(
          student => student.courseDuration.toLowerCase().includes(month.toLowerCase())
        );
        setStudents(monthStudents);
        break;

      case year:
        const yearStudents = originalStudents.filter(
          student => student.courseDuration.toLowerCase().includes(year.toLowerCase())
        );
        setStudents(yearStudents);
        break;

      default:
        setStudents(originalStudents);
    }
    sortByAlphabetically();
  }


  return (
    <section id="filter" className="px-5 md:px-10">
      <form
        className="flex flex-wrap justify-between items-center gap-5 px-5 py-5"
        onSubmit={event => event.preventDefault()}
      >
        <div className="form-group w-full flex justify-between items-center gap-5 lg:w-[30%] lg:gap-3">
          <div className="input-group w-[inherit] flex items-center border rounded lg:w-full">
            <div className="icon-cont px-2">
              <CiSearch className="search-icon opacity-50"/>
            </div>
            <input
              className="w-[inherit] px-3 py-2 focus:outline-none"
              name="search"
              placeholder="Search Student"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>

          <button
            className="text-center border p-2 rounded"
            onClick={handleSortOrder}
          >
            <BiSortAlt2 className="sort-icon text-2xl opacity-50"/>
          </button>
        </div>

        <div className="form-group w-full flex flex-wrap justify-between items-center gap-5 lg:flex-1 lg:gap-3">
          <div className="input-group w-[inherit] sm:w-[48%] lg:w-[49%]">
            <Select
              className="fee-status-select w-[inherit] z-10 sm:w-full"
              options={feeStatusOptions}
              onChange={handleFeeStatus}
            />
          </div>

          <div className="input-group w-[inherit] sm:w-[48%] lg:w-[49%]">
            <Select
              className="course-duration-select w-[inherit] sm:w-full"
              options={courseDurationOptions}
              onChange={handleCourseDuration}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
