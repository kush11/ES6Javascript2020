const Google = {
    locations: ['Bangalore', 'Pune']
}

// challenge to access the first location with destructuing
const { locations:[location] } = Google;
console.log(location)