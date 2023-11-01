// import "../style/index.css";

window.onload = function () {
  let first_name = document.querySelector("[for=name]");
  first_name.addEventListener("input", () => {
    document.querySelector("#first_name").innerText = first_name.value;
  });

  let last_name = document.querySelector("[for=lastName]");
  last_name.addEventListener("input", () => {
    document.querySelector("#last_name").innerText = last_name.value;
  });

  let x = document.querySelector("[for=socialMediaPosition]");
  x.addEventListener("change", () => {
    if (x.value === "Left") {
      document.querySelector(".icons").style.left = "-15%";
    } else {
      document.querySelector(".icons").style.left = "100%";
    }
  });

  //CHANGE COVER
  //let cover = document.querySelector("[for=includeCover]");
  //cover.addEventListener("change", () => {
  // if (cover.value === "true") {
  //  document.querySelector("#myImage").src
  // } else {
  // document.querySelector("#myImage").src = "none";
  // }
  //});

  //let cover = document.querySelector("[for=includeCover]");
  //cover.addEventListener("change", () => {
  //if (cover.value === "true") {
  //document.querySelector(".card").style.display = 'none';
  //} else {
  //document.querySelector("#myImage").src = "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
  //}
  // });

  let cover = document.querySelector("[for=includeCover]");
  cover.addEventListener("change", () => {
   if (cover.value === "true") {
    document.querySelector(".card").innerHTML
   } else {
   document.querySelector(".card").style.backgroundImage = "";
   }
  });

  let twitt = document.querySelector("[for=twitter]");
  twitt.addEventListener("input", () => {
    document.querySelector("#twitter").innerText = twitt.value;
  });

  let role_job = document.querySelector("[for=role]");
  role_job.addEventListener("input", () => {
    document.querySelector("#role_job").innerText = role_job.value;
  });

  let new_city = document.querySelector("[for=city]");
  new_city.addEventListener("input", () => {
    document.querySelector("#new_city").innerText = new_city.value;
  });

  let new_country = document.querySelector("[for=country]");
  new_country.addEventListener("input", () => {
    document.querySelector("#new_country").innerText = new_country.value;
  });
};

function ttt(input, textElement, isALink = false) {
  if (isALink) {
    input.addEventListener("input", () => {
      textElement.href = input.value;
      return;
    });
  }
  input.addEventListener("input", () => {
    textElement.innerText = input.value;
  });
}
ttt(
  document.querySelector("[for=socialMediaPosition]"),
  document.querySelector("#social_media")
);
// ttt(input, textElement, true);

function role_job(input, textElement, aLink = false) {
  if (aLink) {
    input.addEventListener("input", () => {
      textElement.href = input.value;
      return;
    });
  }
  input.addEventListener("input", () => {
    textElement.innerText = input.value;
  });
}
role_job(document.querySelector("[for=role]"), document.querySelector("#role_job"));



//CITY
function new_city(input, textElement, atLink = false) {
  if (atLink) {
    input.addEventListener("input", () => {
      textElement.href = input.value;
      return;
    });
  }
  input.addEventListener("input", () => {
    textElement.innerText = input.value;
  });
}
new_city(document.querySelector("[for=city]"), document.querySelector("#new_city"));

//new_city(input, textElement, true);

//COUNTRY
function new_country(input, textElement, meLink = false) {
  if (meLink) {
    input.addEventListener("input", () => {
      textElement.href = input.value;
      return;
    });
  }
  input.addEventListener("input", () => {
    textElement.innerText = input.value;
  });
}
new_country(
  document.querySelector("country"),
  document.querySelector("#new_country")
);

new_country(input, textElement, true);
