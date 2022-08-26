import React, {useEffect,useState} from "react";
import axios from "axios";
import Filter from "./components/filter";
function Routers()
{
    const [courses,setCourses]=useState([]);
    const Courses = async () => {
        const { data } = await axios("https://nut-case.s3.amazonaws.com/coursessc.json");
        setCourses(data);
      };

        useEffect(() => {
        Courses();
      }, []);

    return (
        <div className="App">  
            <Filter  courses={courses}/>
        </div>
        );
     
    
}
export default Routers;