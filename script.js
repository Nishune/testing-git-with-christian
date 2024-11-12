const beer = document.querySelector("#beer");

beer.addEventListener("click", giveBeer);

function giveBeer() {
  alert("Släpper en fis");
}

(async () => {
  const res = await fetch(
    "https://lernia-sjj-assignments.vercel.app/api/challenges"
  );
  const data = await res.json();
  data.challenges.forEach((challenge) => {
    console.log(challenge.title);
  });
})();
