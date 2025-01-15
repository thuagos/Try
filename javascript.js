const noBtn = document.getElementById('no');

noBtn.addEventListener('mouseover', () => {
    const positionTopRandom  = Math.random() * window.innerHeight;
    const positionLeftRandom = Math.random() * window.innerWidth;
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${positionTopRandom}px`;
    noBtn.style.left = `${positionLeftRandom}px`;
    
    
    console.log('Não')
})