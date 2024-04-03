// Dom Elements
const output = document.querySelector(".output");
const container = document.querySelector(".container");
// Global Variable
let url = "./bible.txt";
const generateRandomNumber = (n) => Math.floor(Math.random() * n);

const displayQoute = (verse) => {
  output.innerHTML = `<p class="quote">
      ${verse[0]}
    </p>
    <h4 class="verse">${verse[1]}</h4>`;
};

// Get Qoute Function
const getQoutes = async () => {
  const res = await fetch(url);
  const data = await res.text();

  const dataArray = data
    .split("\n")
    .filter(
      (data) =>
        data.charAt(0) != "#" &&
        data.charAt(0) != ";" &&
        data != "\r" &&
        data != ""
    );
  const verse = dataArray[generateRandomNumber(dataArray.length)].split("\t");
  displayQoute(verse);
};

getQoutes();
setInterval(getQoutes, 5000);
output.addEventListener("click", getQoutes);
