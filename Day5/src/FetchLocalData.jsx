import { useState, useEffect } from "react";

function FetchLocalData() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔹 Conditional Rendering
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course) => (
        <div key={course.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{course.title}</h3>
          <p>Price: ₹{course.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchLocalData;
