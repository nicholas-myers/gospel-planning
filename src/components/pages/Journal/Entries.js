import React from "react";

function Entries() {
  return (
    <section>
      <h2>Entries</h2>
      <p>Reminder Frequency</p>
      <button>NEW ENTRY</button>
      <select>
          <option>Year</option>
          <option>Year</option>
          <option>Year</option>
          <option>Year</option>
      </select>
      <select>
          <option>Month</option>
          <option>Month</option>
          <option>Month</option>
          <option>Month</option>
      </select>
      <select>
          <option>Day</option>
          <option>Day</option>
          <option>Day</option>
          <option>Day</option>
      </select>
      <article>
          <h3>Entry Title</h3>
          <p>Entry Body</p>
      </article>
    </section>
  );
}

export default Entries;
