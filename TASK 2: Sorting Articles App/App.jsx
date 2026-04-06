This project displays a list of articles and allows sorting based on:
- Most Upvoted
- Most Recent

Features:
- Dynamic rendering of articles
- Sorting using JavaScript sort()
- Button-based sorting
- State management for UI updates

Concepts Used:
- useState
- Array sorting
- Props
- map() for rendering



import { useState } from "react";
import Articles from "./Articles";

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState(articles);

  function sortByUpvotes() {
    const sorted = [...articles].sort(
      (a, b) => b.upvotes - a.upvotes
    );
    setSortedArticles(sorted);
  }

  function sortByDate() {
    const sorted = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedArticles(sorted);
  }

  return (
    <div>
      <h1>Sorting Articles</h1>

      <button onClick={sortByUpvotes}>
        Most Upvoted
      </button>

      <button onClick={sortByDate}>
        Most Recent
      </button>

      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;




