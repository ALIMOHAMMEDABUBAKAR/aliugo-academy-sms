import React from "react";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import "../../styles/studentDashboard.css";

export default function StudentResults() {
  return (
    <div className="student-layout">
      <StudentSidebar />

      <div className="student-main">
        <StudentNavbar />

        <div className="student-content">
          <h2>My Results</h2>

          <table className="student-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>CA</th>
                <th>Exam</th>
                <th>Total</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>20</td>
                <td>60</td>
                <td>80</td>
                <td>A</td>
              </tr>

              <tr>
                <td>English</td>
                <td>18</td>
                <td>55</td>
                <td>73</td>
                <td>B</td>
              </tr>

              <tr>
                <td>Biology</td>
                <td>15</td>
                <td>50</td>
                <td>65</td>
                <td>B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
