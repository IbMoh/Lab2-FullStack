const empUrl = `http://localhost:3000/api/employees`
const assignmentsUrl = `http://localhost:3000/api/project_assignments`
const projUrl = `http://localhost:3000/api/projects`


async function fetchData(url) {
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("The API did not respond")
        }
        return await response.json()
    } catch (error) {
        return console.error(`Error: ${error}`)
    }
}

async function fetchEmp(){

    try {
        const data = await fetchData(empUrl)
        return data.emp
    } catch (error) {
        return console.error(`Error: ${error}`)
    }

}

async function fetchAssignments(){

    try {
        const data = await fetchData(assignmentsUrl)
        return data.proj
    } catch (error) {
        return console.error(`Error: ${error}`)
    }

}

async function fetchProjects(){

    try {
        const data = await fetchData(projUrl)
        return data.proj
    } catch (error) {
        return console.error(`Error: ${error}`)
    }

}

export {fetchAssignments, fetchEmp, fetchProjects}