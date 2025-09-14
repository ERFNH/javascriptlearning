const reviews = [
  {
    id: 2,
    name: "sara smige",
    job: "nurse",
    img: "./images/2.jpg",
    text: ` Hello, my name is Sara Smige.
        I am a registered nurse with experience in patient care and hospital settings.
        I am passionate about providing compassionate and high-quality care to all patients.
        I have strong communication skills.
        I am excited to contribute my skills and dedication to your team.`,
  },

  {
    id: 2,
    name: "sam park",
    job: "UX designer",
    img: "./images/1.jpg",
    text: ` Hi, my name is sam Smige.
        I am a registered UX designer with experience in my job
        I have strong communication skills.
        I am excited to contribute my skills and dedication to your team.`,
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const supriseme = document.querySelector(".supriseme");

let currentitem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showperson(currentitem);
});

function showperson() {
  const item = reviews[currentitem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextbtn.addEventListener("click", function () {
  currentitem++;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  showperson()
});

prevbtn.addEventListener("click", function () {
  currentitem--;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  showperson()
});

supriseme.addEventListener('click',function(){
  currentitem = Math.floor(Math.random() * reviews.length)
  showperson()
})
