function Courses() {

  const courses = [
    { id: 1, name: "React", price: 300 },
    { id: 2, name: "JavaScript", price: 150 },
    { id: 3, name: "Python", price: 200 },
    { id: 4, name: "Java", price: 100 }
  ];

  // 🔹 Sorting (Ascending)
  const sortLowToHigh = () => {
    const sorted = [...courses].sort((x, y) => x.price - y.price);
    console.log("Ascending:", sorted);
  };

  // 🔹 Sorting (Descending)
  const sortHighToLow = () => {
    const sorted = [...courses].sort((x, y) => y.price - x.price);
    console.log("Descending:", sorted);
  };

  // 🔹 Filtering (price < 200)
  const filterCheap = () => {
    const filtered = courses.filter((course) => course.price < 200);
    console.log("Filtered:", filtered);
  };

  // 🔹 Click event (simple)
  const buyCourse = () => {
    alert("Course Purchased!");
  };

  // 🔹 Click event with argument
  const buySpecificCourse = (name, e) => {
    console.log("Event:", e);
    alert("Bought " + name);
  };

  return (
    <div>

      <h2>Courses List</h2>

      {/* Display courses */}
      {courses.map((course) => (
        <div key={course.id}>
          <p>{course.name} - ₹{course.price}</p>

          {/* click event with argument */}
          <button onClick={(e) => buySpecificCourse(course.name, e)}>
            Buy
          </button>
        </div>
      ))}

      <hr />

      {/* Sorting buttons */}
      <button onClick={sortLowToHigh}>Sort Price ↑</button>
      <button onClick={sortHighToLow}>Sort Price ↓</button>

      {/* Filtering button */}
      <button onClick={filterCheap}>Filter Price &lt; 200</button>

      <hr />

      {/* Simple click event */}
      <button onClick={buyCourse}>Buy Course</button>

    </div>
  );
}

export default Courses;
