export const underscoreToReadableText = (text:string) => {
    return capitalizeFirstLetters(text.split('_').join(' '));
}

const smallShortWords = ['a','e','o','é','de','da','do','em','na','no'];

export const capitalizeFirstLetters = (str: string) => {
    if(!str)
      return;
    const words = str.split(' ');
    const capitalizedWords = words.map( word =>
      !smallShortWords.includes(word) ?
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      :
        word.toLowerCase()
    )
    return capitalizedWords.join(' ');
}
