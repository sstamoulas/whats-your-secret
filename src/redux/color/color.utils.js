export const generateRandomNumber = (length) => {
  return parseInt(Math.random() * (length));
}

export const generateRandomColor = () => {
    var randomColor = generateRandomNumber(0xFFFFFF<<0).toString(16);
    var length = randomColor.length;
    for(var i = 0; i < length; i++) {
      if(length < 6) {
        randomColor = 0 + randomColor;
        length++;
      }
    }

    return ('#' + randomColor);
}
