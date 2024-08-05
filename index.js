let nome = "Alyne"
let experiencia = "3050"
let nivel = ""

if (experiencia < 1000) {
    nivel = "ferro"
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "bronze"
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "prata"
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "ouro"
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "platina"
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "ascendente"
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "imortal"
} else {
    nivel = "radiante"
}

console.log(`O Héroi de nome ${nome} está no nível de ${nivel}.`)