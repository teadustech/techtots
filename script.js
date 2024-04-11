// Hero animation using Lottie
const animationContainer = document.querySelector('.hero-animation');
const animationDataPath = animationContainer.dataset.animationPath;

const lottieAnimation = lottie.loadAnimation({
  container: animationContainer,
  renderer: 'svg',
  loop: true,
  autoplay:true
