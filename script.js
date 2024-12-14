// API URL
const apiUrl = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=" +
    encodeURIComponent('colleges like "IT" AND the_programs like "bachelor"') +
    "&limit=100";

// FetchData from api
async function fetchData() {
    try {
        const response = await fetch(apiUrl); // handle api calls

      
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



// Display data in the table
async function displayData() {
    const loadingMessage = document.getElementById("loadingMessage");

    try {
        loadingMessage.style.display = "block"; //display loading while waiting for data

        const data = await fetchData(); //calls fetchData

        loadingMessage.style.display = "none"; //once data is called, hide loading message

        if (data.length === 0) { //if data is empty
            loadingMessage.textContent = "No data found or an error occurred."; //display error
            return;
        }

        const tableBody = document.querySelector("#studentTable tbody"); //selects tbody to display data in rows

        data.forEach(record => { //loops through the records
            const row = document.createElement("tr"); //create new row for each record

            //insert value or N/A for missing values
            row.innerHTML = `
                <td>${record.year || "N/A"}</td>
                <td>${record.semester || "N/A"}</td>
                <td>${record.nationality || "N/A"}</td>
                <td>${record.colleges || "N/A"}</td>
                <td>${record.number_of_students || "N/A"}</td>
            `;

            tableBody.appendChild(row); //add new row


        });

        const tableContainer = document.getElementById("tableContainer");


        tableContainer.style.display = "block";
    } catch (error) {
        console.error("Error displaying data:", error); //log error for debugging
        loadingMessage.textContent = `An error occurred: ${error.message}`; //display error message
    }
}

// Call DisplayData function
displayData();
