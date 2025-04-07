function changeText() {
    document.getElementById('title').textContent = 'Text Changed!';
  }
  
  function changeStyle() {
    document.body.style.backgroundColor = '#f0f0f0';
    document.getElementById('text').style.color = 'blue';
  }
  
  function toggleElement() {
    const area = document.getElementById('toggleArea');
    if (area.innerHTML === '') {
      const newElement = document.createElement('p');
      newElement.textContent = 'This is a dynamically added element.';
      newElement.id = 'dynamic';
      area.appendChild(newElement);
    } else {
      const existing = document.getElementById('dynamic');
      if (existing) {
        existing.remove();
      }
    }
  }
  