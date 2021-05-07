let diameter
let area
let circumference

// Connect "Area" button to function
document.getElementById('area').addEventListener('click', areaofcircle)

// Connect "Circumference" button to function
document.getElementById('circumference').addEventListener('click', circumferenceofcircle)

function areaofcircle () {
  // Get diameter typed in by user
  diameter = document.getElementById('diameter').value
  diameter = parseFloat(diameter)

  // Calculation of area of the circle
  area = Math.PI * (Math.pow(diameter / 2, 2))

  // The alert will show the answer of the area of the circle
  alert(area)
}

function circumferenceofcircle () {
  // Get diameter typed in by user
  diameter = document.getElementById('diameter').value
  diameter = parseFloat(diameter)

  // Calculation of circumference of the circle
  circumference = 2 * Math.PI * (diameter / 2)

  // The alert will show the answer of the circumference of the circle
  alert(circumference)
}
