function zombifyTutors(namesArray) { 
const zombieArray = [...namesArray];
    for (let i = 0; i < zombieArray.length; i++) { 

        if (i % 2 === 0) {
            zombieArray[i] = zombieArray[i] + 'uugghh';
        } else { 
            zombieArray[i] = 'Mmuuhh' + zombieArray[i].toLowerCase() 
        }
    }
    
    return zombieArray
}

module.exports = {zombifyTutors}