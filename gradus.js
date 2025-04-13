const celsius = parseFloat(process.argv[2]);

if (isNaN(celsius)) {
  console.log("Пожалуйста, укажите температуру в Цельсиях числом.");
} else {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C равно ${fahrenheit.toFixed(2)}°F`);
}
