// Program that generates a random zodiac message

const horoscope = {
    zodiac: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'],
    horoscope_today: ['Today will be rough.', 'Do not forget those closest to you.', 'Never over indulge.', 'Success is right around corner.', 'Failure is subjective.'],
    future_reading: ['Tomorrow will be harder than today.', 'Keep your head up and chin down.', 'Life is what you make of it.', 'You are in charge of your own destiny', 'Sometimes you need to make time for yourself.']
};

/*
const zodiac = {
    aries: ['Eager', 'Independent', 'Competitive'],
    taurus: ['Strong', 'Dependable', 'Creative'],
    gemini: ['Versatile', 'Kind', 'Expressive'],
    cancer: ['Intuitive', 'Compassionate', 'Protective'],
    leo: ['Dramatic', 'Outgoing', 'Self-assured'],
    virgo: ['Loyal', 'Gentle', 'Analytical'],
    libra: ['Social', 'Gracious', 'Diplomatic'],
    scorpio: ['Passionate', 'Stubborn', 'Brave'],
    sagittarius: ['Extroverted', 'Optimistic', 'Funny'],
    capricorn: ['Serious', 'Independent', 'Tenacious'],
    aquarius: ['Imaginitive', 'Uncompromising', 'Original'],
    pisces: ['Affectionate', 'Wise', 'Empathetic']
};
*/

const randNumber = num => {
    return Math.floor(Math.random() * num);
};

let message = [];

for(let item in horoscope){
    let index = randNumber(horoscope[item].length);

    if(item === 'zodiac'){
        message.push(`The horoscope for ${horoscope[item][index]} goes as follows.`);
    }
    else if(item === 'horoscope_today'){
        message.push(horoscope[item][index]);
    }
    else if(item === 'future_reading'){
        message.push(horoscope[item][index]);
    }
    else{
        console.log('System Error');
    }
}

const convertString = arr => {
    const newString = arr.join('\n');
    console.log(newString);
};

convertString(message);


