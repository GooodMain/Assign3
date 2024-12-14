// API URL
const apiUrl = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=" +
    encodeURIComponent('colleges like "IT" AND the_programs like "bachelor"') +
    "&limit=100";

// FetchData from api
async function fetchData() {
    try {
        const response = await fetch(apiUrl); // handle api calls

        if (!response.ok) { //Checks for errors
            throw new Error(`Failed to fetch data: ${response.statusText}`); //give error message
        }

        const data = await response.json(); //converts json to js

        // Log the API
        console.log("Full API Response:", data);

        
        if (data && data.results && Array.isArray(data.results)) { //if data exists
            return data.results.map(record => record); // Return records
        } else {
            throw new Error("Invalid API response: 'results' missing or incorrect structure"); //error
        }
    } catch (error) {
        console.error("Error fetching data:", error); //debugging
        return []; // Return an empty array if error
    }
}


