const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日はとても寒かった。だから、 :insertx: 歩いた。そして、 :inserty:についた。 :insertz: Bob は驚いたが、体重150キロの :insertx:驚かなかった。天気予報は快晴だった。';
const insertX = ['わたしは', 'おじいさんは', 'サンタクロースは'];
const insertY = ['友達の家', 'ユニーバーサルスタジオ', '別荘'];
const insertZ = ['とても暑かった。', '雪が降っていた。', '混んでいた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  /*
   if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
  */

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
