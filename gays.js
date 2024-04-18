const fs = require("fs");
const prompt = require("prompt-sync")();

let gaysInfo = fs.readFileSync("gays.json", "utf-8");

const gays = JSON.parse(gaysInfo);
console.log(gays);

let gayAdd = prompt("Quiere añadir un nuevo integrante? 1: si o 2: no: ");

if (gayAdd == 1) {
  nombrei = prompt("Ingrese el nombre del nuevo integrante: ");
  gay_leveli = prompt("Ingrese el nivel de gay del nuevo integrante: ");
  let nuevoGay = {
    id: gays.length,
    nombre: nombrei,
    gay_level: gay_leveli,
  };
  gays.push(nuevoGay);
  let jsonStr = JSON.stringify(gays);

  fs.writeFileSync("gays.json", jsonStr);
}

let reuniones = prompt(
  "Ingrese el numero de reuniones que se tendran al mes: "
);

for (let i = 0; i < reuniones; i++) {
  let gay = prompt("Ingrese el nombre del integrante del grupo: ");
  let gayMember = gays.find(member => member.nombre === gay);

  // Si el integrante ingresado tiene un nivel de gay mayor que 0, incrementar el nivel de gay de todos los demás
  if (gayMember && gayMember.gay_level > 0) {
    for (let j = 0; j <= gays.length - 1; j++) {
      if (gays[j].nombre !== gay) {
        gays[j].gay_level++;
      }
    }
  }
}

for (let i = 0; i <= gays.length - 1; i++) {
  console.log(`El nivel de gay de ${gays[i].nombre} es: ${gays[i].gay_level}`);
}
