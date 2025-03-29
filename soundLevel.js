// Sound meter software based on data collected from a music box :

console.log 

(`---- Sound meter software ----

    Measurement date: 12/21/24 11:00 Pm

    Collecting data...
    Processing...
    
    Measurment Data:`)

// Data: 
let car = "approaching"
const carVelocityLimit = 150 // Km/h
let spaceVariation = 160 // (m)
let timeMovement = 2 // (s)
const frequencyLimit = 100 // (Hz)
let realFrequency = 80 // (Hz)
const soundVelocity = 340 // (m/s)
const observerVelocity = 0 // (m/s) // Aways stopped
let apparentFrequency // (Hz)

    let carVelocity = spaceVariation / timeMovement
    let carVelocityKmH = carVelocity * 3.6 // (Km/h)

    if (car === "approaching") {
        apparentFrequency = realFrequency * [(soundVelocity) / (soundVelocity - carVelocity)]
    } else if (car === "displacement") {
        apparentFrequency = realFrequency * [(soundVelocity) / (soundVelocity + carVelocity)]
    } else {
        apparentFrequency = realFrequency
    }
    


let measurementTime = 23;
const voltage = 220;  //  (V)
const liquidVolume = 100;  //  (ml)
const liquidDensity = 1;  //  (g/ml or kg/L)
const specificHeat = 1;  //  (cal/g°C)
const temperatureVariation = 2;  // (°C)
const heatingTime = 10;  // (s)
const eletricCurrent = 4;  // (A)
const distanceBoxMachine = 20;  // (m)
const pi = 3;  // π
const thresholdHearing = Math.pow(10, -12); // (W/m²)

    const mass = liquidDensity * liquidVolume; //  (g)


        let heatCalories = mass * specificHeat * temperatureVariation;  // (cal)
        let heatJoule =  heatCalories * 4;  // (J)
        let heatPower = heatJoule / heatingTime;  // heat transfer rate (W)
                    
       
            let resistancePower = heatPower; 
            let sourcePower = voltage * eletricCurrent; 
            let loadPower = sourcePower - resistancePower;

                
        let wavePower = loadPower;
        let sphereArea = 4 * pi * Math.pow(distanceBoxMachine, 2); 
        let soundIntensity = wavePower / sphereArea;  // (W/m²)
    
            let soundLevel = 10 * Math.log10(soundIntensity / thresholdHearing);
            soundLevel = Math.round(soundLevel);
                   
            let soundLimitDay = 80;
            let soundLimitNight = 75;

console.log
(`
- Real Frequency: ${realFrequency} Hz
- Local Voltage: ${voltage} V
- Ammeter Data: ${eletricCurrent} A
- Thermometer Data: ${temperatureVariation} °C (For ${heatingTime} seconds)
- Liquid Data: ${liquidVolume} ml / ${liquidDensity} Kg/L / ${specificHeat} cal/g°C
- Analysis Distance: ${distanceBoxMachine} m 
 
Constants Used According to the International System of Units (With Rounding):`)


console.log
(`
- π: 3.1415... (Rounded to 3)
- Threshold of Hearing: 10⁻¹² W/m²
- 1 cal = 4 J
- Speed of Sound: ${soundVelocity} m/s

Measurement Made With Ambient Temperature and Pressure Conditions Parameters:

- Pressure: 1 ATM
- Temperature: 20°C

Analysis Results:

- Observed Frequency: ${apparentFrequency} Hz
- Vehicle Speed: ${carVelocityKmH} Km/h
- Music Box Power: ${loadPower} W
- Sound Intensity: ${soundIntensity} W/m²
- Sound Level: ${soundLevel} 

Limits According to Law (fictitious):

- Speed: ${carVelocityLimit} Km/h
- Sound Frequency: ${frequencyLimit} Hz
- Daytime Sound Level: ${soundLimitDay} dB
- Night Sound Level = ${soundLimitNight} dB

Conclusion of the analysis:
`)
 



if ((measurementTime >= 7 && measurementTime < 22)) {
            if (soundLevel > soundLimitDay) {
                console.log("-Sound Level: Legal proceedings, because the limit was exceeded in" , soundLevel - soundLimitDay , "dB");
            } else {
                console.log("-Sound Level: Everything is fine, the limit has not been exceeded");
            }
} else {
            if (soundLevel > soundLimitNight) {
                console.log("-Sound Level: Legal proceedings, because the limit was exceeded in" , soundLevel - soundLimitNight , "dB");
            } else {
                console.log("-Sound Level: Everything is fine, the limit has not been exceeded");
            }
}


if (apparentFrequency > frequencyLimit) {
    console.log('-Frequency: Legal proceedings, because the limit was exceeded in' , apparentFrequency - frequencyLimit , "Hz")
} else {
    console.log("-Frequency: Everything is fine, the limit has not been exceeded")
}



if (carVelocityKmH > carVelocityLimit) {
    console.log('-Car Speed: Legal proceedings, because the limit was exceeded in' , carVelocityKmH - carVelocityLimit , "Km/h")
} else {
    console.log('-Car Speed: Everything is fine, the limit has not been exceeded')
}
        
        

        

    

        




