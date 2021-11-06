import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {

  //  let courses = []
  const [courses, setCourses] = useState([])

    React.useEffect(() => {
        console.log(courses.length)
        if(courses.length === 0){
            axios.get(`http://localhost:3000/courses/get-all`)
                .then(response => {
                    console.log(response.data);
                    setCourses(response.data);
                    //courses = response.data;

                })
                .catch(err => {
                    console.error(err);
                })
        }

    })



    // console.log(courses)
    return (

        <div>
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="email">Search</label>
                    <input className="form-control" id="email" placeholder="Search Course"></input>
                </div>
                <button type="submit" className="btn btn-default">Search</button>
            </form>
            {
                courses.map((course) => (
                    <div>
                    <p>
                        {course.instructor} <br/>
                        {course.course_name}  <br/>
                        {course.createdAt}  <br/>
                        {course.description}  <br/>
                        {course.updatedAt}  <br/>
                     </p>
                     </div>
                ))
            }
        </div>

    )

}
export default Home
