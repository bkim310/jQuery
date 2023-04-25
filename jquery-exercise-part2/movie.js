let current = 0;

$("#movieform").on("submit", function (e) {
  e.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();

  let review = { title, rating, current };
  const appendReview = movieInfo(review);
  current++; //so we can give the next review an ID number
  $("#storedreview").append(appendReview); //append the function movieInfo result to our tbody
  $("#movieform").trigger("reset"); //resets the form
});

function movieInfo(info) {
  return `
    <tr>
      <td>${info.title}</td>
      <td>${info.rating}</td>
      <td>
        <button class="delete" id=${info.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
