//your JS code here. If required.
// Original band names
const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to remove 'a', 'an', 'the' from the beginning
function removeArticles(bandName) {
    let result = '';
    let lowerName = '';
    
    // Convert to lowercase for comparison
    for (let i = 0; i < bandName.length; i++) {
        let char = bandName[i];
        if (char >= 'A' && char <= 'Z') {
            lowerName = lowerName + String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            lowerName = lowerName + char;
        }
    }
    
    // Check if starts with 'the '
    if (lowerName[0] === 't' && lowerName[1] === 'h' && lowerName[2] === 'e' && lowerName[3] === ' ') {
        for (let i = 4; i < bandName.length; i++) {
            result = result + bandName[i];
        }
        return result;
    }
    
    // Check if starts with 'an '
    if (lowerName[0] === 'a' && lowerName[1] === 'n' && lowerName[2] === ' ') {
        for (let i = 3; i < bandName.length; i++) {
            result = result + bandName[i];
        }
        return result;
    }
    
    // Check if starts with 'a '
    if (lowerName[0] === 'a' && lowerName[1] === ' ') {
        for (let i = 2; i < bandName.length; i++) {
            result = result + bandName[i];
        }
        return result;
    }
    
    // If no article found, return original
    return bandName;
}

// Bubble sort to sort the bands alphabetically
for (let i = 0; i < bands.length; i++) {
    for (let j = 0; j < bands.length - 1 - i; j++) {
        let name1 = removeArticles(bands[j]);
        let name2 = removeArticles(bands[j + 1]);
        
        // Convert both names to lowercase for comparison
        let lowerName1 = '';
        let lowerName2 = '';
        
        for (let k = 0; k < name1.length; k++) {
            let char = name1[k];
            if (char >= 'A' && char <= 'Z') {
                lowerName1 = lowerName1 + String.fromCharCode(char.charCodeAt(0) + 32);
            } else {
                lowerName1 = lowerName1 + char;
            }
        }
        
        for (let k = 0; k < name2.length; k++) {
            let char = name2[k];
            if (char >= 'A' && char <= 'Z') {
                lowerName2 = lowerName2 + String.fromCharCode(char.charCodeAt(0) + 32);
            } else {
                lowerName2 = lowerName2 + char;
            }
        }
        
        // Compare the two names
        let shouldSwap = false;
        let minLength = lowerName1.length;
        if (lowerName2.length < minLength) {
            minLength = lowerName2.length;
        }
        
        for (let k = 0; k < minLength; k++) {
            if (lowerName1[k] > lowerName2[k]) {
                shouldSwap = true;
                break;
            } else if (lowerName1[k] < lowerName2[k]) {
                break;
            }
        }
        
        // If names are equal up to minLength, shorter one comes first
        if (!shouldSwap && lowerName1.length > lowerName2.length) {
            let allEqual = true;
            for (let k = 0; k < minLength; k++) {
                if (lowerName1[k] !== lowerName2[k]) {
                    allEqual = false;
                    break;
                }
            }
            if (allEqual) {
                shouldSwap = true;
            }
        }
        
        // Swap if needed
        if (shouldSwap) {
            let temp = bands[j];
            bands[j] = bands[j + 1];
            bands[j + 1] = temp;
        }
    }
}

// Get the ul element
const bandList = document.getElementById('band');

// Add each band to the list
for (let i = 0; i < bands.length; i++) {
    const li = document.createElement('li');
    li.textContent = bands[i];
    bandList.appendChild(li);
}