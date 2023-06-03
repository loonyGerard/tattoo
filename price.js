// Dane wejściowe
let sizeX = 10
let sizeY = 20
let isColored = true // Czy tatuaż jest kolorowy (true lub false)
let tattooIntensity = 4 // Intensywność tatuażu (skala od 1 do 5)
let tattooStyle = 2 // 1 - "realism", 2 - "sketch", 3 graficzny

const tattooSize = sizeX * sizeY // Wielkość tatuażu w centymetrach kwadratowych
const colorMultiplier = 1.2 // Mnożnik zależny od koloru
const basePricePerSquareCm = 5 // Bazowa cena za centymetr kwadratowy

// Obliczanie ceny

//obliczanie mnożnika intensywności
let intensityMultiplier // Mnożnik zależny od intensywności
if (tattooIntensity == 1) {
	intensityMultiplier = 1
} else if (tattooIntensity == 2) {
	intensityMultiplier = 1.1
} else if (tattooIntensity == 3) {
	intensityMultiplier = 1.2
} else if (tattooIntensity == 4) {
	intensityMultiplier = 1.3
} else if (tattooIntensity == 5) {
	intensityMultiplier = 1.4
} else {
	console.log('zła wartosć tattooIntensity')
}

// tworzenie współczynnika stylu tatuażu
let tattooStyleMultiplier = 0
if (tattooStyle == 1) {
	tattooStyleMultiplier = 1.2
} else if (tattooStyle == 2) {
	tattooStyleMultiplier = 0.8
} else if (tattooStyle == 3) {
	tattooStyleMultiplier = 1
} else {
	console.log('zła wartosć tattooStyleMultiplier')
}

// tworzenie współczynnika wielkości tatuażu
let sizeMultiplier = 0

if (tattooSize <= 50) {
	sizeMultiplier = 1.1
} else if (tattooSize <= 100) {
	sizeMultiplier = 1
} else if (tattooSize <= 150) {
	sizeMultiplier = 0.8
} else if (tattooSize <= 200) {
	sizeMultiplier = 0.6
} else if (tattooSize <= 400) {
	sizeMultiplier = 0.5
} else {
	sizeMultiplier = 0.5
}

// wycena na podstwie danych
let price = basePricePerSquareCm * tattooSize
price *= intensityMultiplier * sizeMultiplier * tattooStyleMultiplier

if (isColored) {
	price *= colorMultiplier
}

if (price < 300) {
	price = 300
}

// zaokrąglanie ceny
let priceRound = Math.round(price)
priceRound = Math.ceil(priceRound / 50) * 50
console.log(priceRound + 'zł')

// informowanie o ilości spotkań
let textSessionCount

if (priceRound > 3600) {
	textSessionCount = 'Może być potrzebne więcej niż dwa spotkania'
	console.log(textSessionCount)
} else if (priceRound > 1800) {
	textSessionCount = 'Może być potrzebne więcej niż jedno spotkanie'
	console.log(textSessionCount)
} else {
	textSessionCount = 'Tatuaż uda się zrobić na jednym spotkaniu'
	console.log(textSessionCount)
}

// dobór artysty
let artist

if (tattooStyle == 1) {
	artist = 'Gerard'
} else {
	;('skontaktuj się ze studiem w celu dobrania artysty')
}

console.log(`polecany artysta to ${artist}`)

// info końcowe
console.log(
	'Podana cena jest orientacyjna, skontaktuj się ze studiem lub bezpośrdnio z polecanym artystą aby potwierdzić cenę'
)



