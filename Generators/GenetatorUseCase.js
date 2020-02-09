// EngineeringTeam has the list of names of lead manager engineer 
// get all the name of the team with generator


const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Kush',
    manager: 'Adarsh',
    engineer: 'Akash'
}

function* TeamIterator(team) {
    yield team.lead
    yield team.manager
    yield team.engineer
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names)