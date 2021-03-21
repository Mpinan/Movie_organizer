const validate = (movie) => {
  const errors = {};

if (movie.film_name.trim() === "") {
  errors.film_name = "Film name is required";
}
if (movie.img_url.trim() === "") {
  errors.img_url = "image url is required";
}
if (movie.release_year === 0) {
  errors.release_year = "Release date is required";
}
if (movie.summary.trim() === "") {
  errors.summary = "Summary is required";
}
if (movie.director.trim() === "") {
  errors.director = "Director is required";
}
// if (movie.rating === 0) {
//   errors.rating = "Rating is required";
// }
if (movie.film_runtime === 0) {
  errors.film_runtime = "Film duration is required";
}
return Object.keys(errors).length === 0 ? null : errors;
}

module.exports = {
  validate
};