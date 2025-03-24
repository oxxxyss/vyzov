document.getElementById('showButton').addEventListener('click', function() {
    const element = document.getElementById('hiddenElement');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });