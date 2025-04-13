const radius = parseFloat(process.argv[2]);

if (isNaN(radius)) {
  console.log("Пожалуйста, укажите радиус круга числом.");
} else {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(`Площадь круга с радиусом ${radius} равна ${area.toFixed(2)}`);
}
