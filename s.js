function loadContent(section) {
    let content = document.getElementById('content-display');

    switch (section) {
        case 'prn':
            content.innerHTML = `
                <h2>Get Your PRN</h2>
                 <div class="container">
        <link rel="stylesheet" href="styles.css">
        <div class="input-box">
            <label for="rollNo">Enter Roll Number:</label>
            <input type="text" id="rollNo" placeholder="Enter your roll number here">
            <button id="searchBtn" onclick="findPRN()">Find PRN</button>
             
        </div>
        <div id="result">
            <!-- PRN result will appear here -->
        </div>
    </div>

                <a href="https://crce-students.contineo.in/parents/index.php" target="_blank">Go to Contineo</a>
            
            `;
            break;

        case 'calendar':
            content.innerHTML = `
                <h2>Academic Calendar</h2>
                <p>Here is the academic calendar for the current year:</p>
                <p><a href="Ac.pdf" download>Download the full calendar</a></p>
            `;
            break;
            case 'TimeTable':
                content.innerHTML = `
                    <h2>Time Table</h2>
                    <p>SE Comps B:</p>
                     <embed src="SE_Comps_b.pdf" type="application/pdf" width="85%" height="600px">
                     <p>SE Comps A:</p>
                     <embed src="SE_Comps_b.pdf" type="application/pdf" width="85%" height="600px">
                     <p>SE ECS:</p>
                     <embed src="SE_Comps_b.pdf" type="application/pdf" width="85%" height="600px">
                     <p>SE Mech:</p>
                     <embed src="SE_Comps_b.pdf" type="application/pdf" width="85%" height="600px">
                     <p>SE AIDS:</p>
                     <embed src="SE_Comps_b.pdf" type="application/pdf" width="85%" height="600px">
                     
                    
                `;
                break;

        case 'email':
            content.innerHTML = `
                <p>If you are unable to attend class for any reason, you must email your class teacher in advance at unik.lokhande@fragnel.edu.in.</p>

<p>Medical Absences:

If you are absent due to a medical reason, you must send an initial email to <a href = "mailto:unik.lokhande@fragnel.edu.in">unik.lokhande@fragnel.edu.in</a> informing about your absence.
Additionally, upon your return, you are required to submit your medical certificate in person to your class teacher.</p>

<p>Failure to follow these procedures may result in your absence being marked as unexcused.

Thank you for your cooperation.</p>
<h2>Template</h2>
                <ul>
                    <p>Subject: Request for Leave of Absence from [Start Date] to [End Date] Due to [Reason for Absence]
</p>
<p>I am writing to inform you that I will be unable to attend classes from [Start Date] to [End Date] due to [Reason for Absence]. < additional information (if any)>

</p>
<p>Best regards,
</p>
[Your Full Name]
</p>
<p>[Your Roll No.]
</p>
<p>[Your Class/Section]
</p>
<p>[Your Contact Information]</p>
                </ul>
            `;
            break;

        case 'syllabus':
            content.innerHTML = `
                <h2>Syllabus</h2>
                <p>Download the syllabus:</p>
                  <a href="https://frcrce.ac.in/index.php/academics/autonomous-curriculum/syllabus" target="_blank">Syllabus</a>
            `;
            break;

        case 'moodle':
            content.innerHTML = `
                <h2>Moodle Access</h2>
                <p>Access your courses and materials on Moodle:</p>
                <a href="http://gyan.fragnel.edu.in:6644/moodle/" target="_blank">Go to Moodle</a>
            `;
            break;
        case 'Studentportal':
                content.innerHTML = `
                    <h2>Student Portal</h2>
                    <p>Access your Student Portal:</p>
                    <a href="http://granth.fragnel.edu.in:5186/pinfo/index.php" target="_blank">Student Portal</a>
                `;
                break;

        case 'contacts':
            content.innerHTML = `
                <h2>Contact Information</h2>
                <p>Reach out to the concerned departments:</p>
                <h3>Computers</h3>
                <ul>
                    <a href="https://frcrce.ac.in/index.php/crce-department/comp-engg/faculty-compengg" target="_blank">Faculty Overview</a>
                </ul>
                <h3>Ecs</h3>
                <ul>
                     <a href="https://frcrce.ac.in/index.php/crce-department/elex-compsci/faculty-elex-compsci" target="_blank">Faculty Overview</a>
                </ul>
                <h3>Mechanicals</h3>
                <ul>
                  <a href="https://frcrce.ac.in/index.php/crce-department/mechengg/faculty-mech" target="_blank">Faculty Overview</a>
                </ul>
                <h3>AIDS</h3>
                <ul>
                  <a href="https://frcrce.ac.in/index.php/crce-department/ai-ds/faculty-ai-ds" target="_blank">Faculty Overview</a>
                </ul>
               
            `;
            break;

        default:
            content.innerHTML = '<p>Welcome! Click on the options to view the content.</p>';
    }
}// Object to hold the mapping of roll numbers to PRN numbers
let data = {};

// Function to fetch CSV data and parse it
function loadCSV() {
    fetch('Real.csv')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n');
            lines.forEach(line => {
                const [rollNo, prnNo] = line.split(',');

                // Make sure both rollNo and prnNo are trimmed to remove any extra spaces
                if (rollNo && prnNo) {
                    data[rollNo.trim()] = prnNo.trim();
                }
            });

            // Log the data to confirm it's loaded properly (for debugging)
            console.log('Data loaded:', data);
        })
        .catch(error => console.error('Error loading CSV:', error));
}

// Function to search for PRN based on entered roll number
function findPRN() {
    const rollNo = document.getElementById('rollNo').value.trim();
    const result = document.getElementById('result');

    // Check if the roll number exists in the data object
    if (data[rollNo]) {
        result.innerText = `PRN: ${data[rollNo]}`;
        result.style.color = '#00796B';  // Set success message color
    } else {
        result.innerText = 'PRN not found for this roll number.';
        result.style.color = 'red';  // Set error message color
    }
}

// Load the CSV data when the page loads
window.onload = loadCSV;

