const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const c = parseFloat(process.argv[4]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Пожалуйста, укажите коэффициенты a, b и c числом.");
} else {
  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    console.log("Корней нет.");
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    console.log(`Один корень: ${root}`);
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Корень 1: ${root1}`);
    console.log(`Корень 2: ${root2}`);
  }
}
