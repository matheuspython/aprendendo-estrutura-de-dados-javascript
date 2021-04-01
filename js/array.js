/*
  aqui estamos salvando a media de temperatura de cada mes sem usar arrays 
 */
const  avgTempJan = 31.9;
const  avgTempFev = 35.3;
const  avgTempMar = 42;
const  avgTempApr = 38;
const  avgTempMay = 25.5;

/*
  aqui utilizaremos array para armazenar esses dados 
*/

//indices          0     1    2   3   4        
const avgTemp = [31.9, 35.3, 42, 38, 25.5];

avgTemp.forEach((value, i) => console.log(`temperatura do mês ${i} é  ${value}`))
