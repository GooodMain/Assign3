<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UOB Student Data</title>
    <!-- link picocss -->
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</head>
<body>
    <main class="container">
    <h1>UOB Data</h1>
    <!-- show loading data text before showing the table after it loads -->
        <div id="loadingMessage">Loading data...</div> 
        <div id="tableContainer" style="display: none;"> 
            <table id="studentTable" class="table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>Nationality</th>
                        <th>College</th>
                        <th>Number of Students</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Place for rows -->
                </tbody>
            </table>
        </div>
    </main>
    <!-- Link js file -->
    <script src="script.js"></script>
</body>
</html>