document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let m1 = Number(document.getElementById("sub1").value);
    let m2 = Number(document.getElementById("sub2").value);
    let m3 = Number(document.getElementById("sub3").value);
    let m4 = Number(document.getElementById("sub4").value);
    let m5 = Number(document.getElementById("sub5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let status = percentage >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>

        <table>
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Grade</th>
                <th>Status</th>
            </tr>

            <tr>
                <td>${name}</td>
                <td>${roll}</td>
                <td>${total}/500</td>
                <td>${percentage}%</td>
                <td>${grade}</td>
                <td>${status}</td>
            </tr>
        </table>
    `;
});