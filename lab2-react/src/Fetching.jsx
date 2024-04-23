import React, { useState, useEffect } from 'react';
import { fetchAssignments, fetchEmp, fetchProjects } from "../../dataFetch.js";

function Fetching(){

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const assignmentsData = await fetchAssignments()
                const empData = await fetchEmp()
                const projectsData = await fetchProjects()

                const combinedData = assignmentsData.map(assignment => {
                    const employee = empData.find(emp => emp.employee_id === assignment.employee_id)
                    const project = projectsData.find(proj => proj.project_code === assignment.project_code)
                    return {
                        employee_id: employee ? assignment.employee_id : 'N/A',
                        employee_name: employee ? employee.full_name : 'Not Assigned',
                        email: employee ? employee.email : "N/A",
                        project_name: project ? project.project_name : 'Not Assigned',
                        project_description: project ? project.project_description : "N/A",
                        start_date: assignment.start_date
                    }
                })

                const latestData = combinedData.slice(-5)
                setData(latestData)

                setInterval(fetchData(), 5000)

            } catch (error) {
                console.log(error)
            }
        };

        fetchData()
    }, [])// the empty list states that no dependencies required

    return (
        <>  
            <header>
                <h2>Employee Assignments</h2>
            </header>
            <table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>Project Description</th>
                    </tr>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.employee_id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.project_name}</td>
                            <td>{item.start_date}</td>
                            <td>{item.project_description}</td>
                        </tr>
                    ))}
            </table>
        </>
    )
}

export default Fetching
