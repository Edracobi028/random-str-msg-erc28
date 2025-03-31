//CODIGO DEL PROYECTO
const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "No olvides el punto y coma",
    "Batman! (this commit has no parents)",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]; //obtener un numero aleatoria basado en el alrgo del array
    console.log(`\x1b[34m${message}\x1b[89m`); //Mostrar msj formateado
  }
  //Export de la funcion para poderla utilizar
  module.exports = {
    funnyCommit
  };