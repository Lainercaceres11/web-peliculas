const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2I0YTcxNWJjYjM0MzU2MzQ0YWFhYzViYjUzNDcyMiIsInN1YiI6IjY0MGFhMmRlMzI2ZWMxMDA3YjU0YWJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFI6Cd1TVEHesAP4W-GcGKw1l7I5ttbA69JFdswAgP0",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}