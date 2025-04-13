const totalSeconds = parseInt(process.argv[2]);

if (isNaN(totalSeconds)) {
  console.log("Пожалуйста, укажите количество секунд числом.");
} else {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}
