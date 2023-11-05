


//BEFORE ALL THIS MESS!!!!!!!!!!!!!
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
  x.addEventListener("input", () => {
    if (x.value === "left") {
      document.querySelector(".icons").style.left = "-15%";
    } else {
      document.querySelector(".icons").style.left = "90%";
    }
  });


  // let covers = document.querySelector("[for=includeCover]");
  //    covers.addEventListener("change", () => {
  //     if (covers.value === "true") {
  //      document.getElementById(".card").style.backgroundImage ="color";
  //     } else {
  //     document.getElementById(".card").style.backgroundImage = "";
  //     }
  //   });

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

  let cover = document.querySelector("[for=includeCover]");
  cover.addEventListener("change", () => {
    if (covers.value === "true") {
    document.querySelector("card").innerText = cover.value;
    }else {
      document.getElementById(".card").style.backgroundImage = "";
    }
  });
};

function ttt(input, textElement, isALink = false) {
  if (link) {
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
  document.querySelector("socialMediaPosition"),
  document.querySelector("#social_media")
);
ttt(input, textElement, true);

function role_job(input, textElement, aLink = false) {
  if (elink) {
    input.addEventListener("input", () => {
      textElement.href = input.value;
      return;
    });
  }
  input.addEventListener("input", () => {
    textElement.innerText = input.value;
  });
}
role_job(document.querySelector("role"), document.querySelector("#role_job"));

role_job(input, textElement, true);

//CITY
function new_city(input, textElement, atLink = false) {
  if (theLink) {
    input.addEventListener("input", () => {
      textElement.href = input.value;
      return;
    });
  }
  input.addEventListener("input", () => {
    textElement.innerText = input.value;
  });
}
new_city(document.querySelector("city"), document.querySelector("#new_city"));

new_city(input, textElement, true);

//COUNTRY
function new_country(input, textElement, meLink = false) {
  if (thatLink) {
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
  