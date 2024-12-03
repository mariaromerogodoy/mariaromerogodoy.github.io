const colors = ['#81C784', '#90EE90', '#4CAF50', '#FFD700', '#2C6E1F'];
let currentIndex = 0; 


function changeColor() {
  document.querySelector('.container').style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}


setInterval(changeColor, 1500);