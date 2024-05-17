let imgBox = document.querySelector(".img-box");
document.getElementById("image").style.width = imgBox.offsetWidth + "px";
window.onresize = () => {
  document.getElementById("image").style.width = imgBox.offsetWidth + "px";
};
imgBox.onmousemove = (e) => {
  document.querySelector(".img-box div").style.width = `${
    e.pageX - imgBox.offsetLeft
  }px`;
  document.getElementById("line").style.left = `${
    e.pageX - imgBox.offsetLeft
  }px`;
};
