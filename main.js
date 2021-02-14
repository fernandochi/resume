show = document.querySelector(".open");
icons = document.querySelector(".icons");
close = document.querySelector(".close");

const show_icons = () => {
  show.style.display = "none";
  icons.style.display = "initial";
  close.style.display = "initial";
};

show.addEventListener("click", show_icons);

const hide_icons = () => {
  show.style.display = "initial";
  icons.style.display = "none";
  close.style.display = "none";
};

close.addEventListener("click", hide_icons);
