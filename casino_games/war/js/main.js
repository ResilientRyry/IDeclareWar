document.getElementById('go').onclick = startGame

document.getElementsByClassName('ten')[0].onclick = betting10 === 10

document.getElementsByClassName('twenty')[0].onclick = betting20 === 20

document.getElementsByClassName('fifty')[0].onclick = betting50 === 50

document.getElementsByClassName('hundo')[0].onclick = betting100 === 100

// document.getElementById('cardSuite').onclick = cardSuite
//
// document.getElementById('cardSuite2').onclick = cardSuite2

alert('Let The Games Begin!!!!!')

// let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// let suite = ['https://banner2.kisspng.com/20180408/uew/kisspng-playing-card-spades-card-game-clip-art-ace-card-5ac9db809c2dd0.5135085215231783686397.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png', 'https://banner2.kisspng.com/20180218/bke/kisspng-suit-playing-card-heart-card-game-clip-art-ny-cliparts-5a89ac326bc202.1977712415189719544414.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/2000px-SuitClubs.svg.png']
let player = {
  cards : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  // suite : ['https://banner2.kisspng.com/20180408/uew/kisspng-playing-card-spades-card-game-clip-art-ace-card-5ac9db809c2dd0.5135085215231783686397.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png', 'https://banner2.kisspng.com/20180218/bke/kisspng-suit-playing-card-heart-card-game-clip-art-ny-cliparts-5a89ac326bc202.1977712415189719544414.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/2000px-SuitClubs.svg.png']
}



function startGame(){
  // CPU Card
  let shuffle = player.cards[Math.floor(Math.random() * player.cards.length)];
  document.getElementsByClassName('cpucard')[0].innerText = shuffle
  // User Card
  let shuffle2 = player.cards[Math.floor(Math.random() * player.cards.length)];
  document.getElementsByClassName('usercard')[0].innerText = shuffle2

  // // CPU card suite
  // let cardSuite = suite[Math.floor(Math.random() * cards.length)];
  // // User card suite
  // let cardSuite2 = suite[Math.floor(Math.random() * cards.length)];

  // determine winner
  // let results = function winner(){
      // if (shuffle != shuffle2){
      //   // alert('CPU WINS!!!')
      // }else if (shuffle > shuffle2){

      // }else {
      //   alert('WAR!!!')
      // }
    if (shuffle === 'A' && shuffle2 === 'K' || shuffle === 'A' && shuffle2 === 'Q' || shuffle === 'A' && shuffle2 === 'J' || shuffle === 'A' && shuffle2 === '10' || shuffle === 'A' && shuffle2 === '9' || shuffle === 'A' && shuffle2 === '8' ||
    shuffle === 'A' && shuffle2 === '7' || shuffle ===  'A' && shuffle2 === '6' || shuffle === 'A' && shuffle2 === '5' || shuffle === 'A' && shuffle2 === '4' || shuffle === 'A' && shuffle2 === '3' || shuffle === 'A' && shuffle2 === '2' ||
    shuffle === 'K' && shuffle2 === 'Q' || shuffle === 'K' && shuffle2 === 'J' || shuffle === 'K' && shuffle2 === '10' || shuffle === 'K' && shuffle2 === '9' || shuffle === 'K' && shuffle2 === '8' || shuffle === 'K' && shuffle2 === '7' ||
    shuffle === 'K' && shuffle2 === '6' || shuffle === 'K' && shuffle2 === '5' || shuffle === 'K' && shuffle2 === '4' || shuffle === 'K' && shuffle2 === '3' || shuffle === 'K' && shuffle2 === '2' ||
    shuffle === 'Q' && shuffle2 === 'J' || shuffle === 'Q' && shuffle2 === '10' || shuffle === 'Q' && shuffle2 === '9' ||shuffle ===  'Q' && shuffle2 === '8' || shuffle === 'Q' && shuffle2 === '7' || shuffle === 'Q' && shuffle2 === '6' ||
    shuffle === 'Q' && shuffle2 === '5' || shuffle === 'Q' && shuffle2 === '4' || shuffle === 'Q' && shuffle2 === '3' || shuffle === 'Q' && shuffle2 === '2' ||
    shuffle === 'J' && shuffle2 === '10' || shuffle === 'J' && shuffle2 === '9' || shuffle === 'J' && shuffle2 === '8' || shuffle === 'J' && shuffle2 === '7' || shuffle === 'J' && shuffle2 === '6' ||
    shuffle === 'J' && shuffle2 === '5' || shuffle === 'J' && shuffle2 === '4' || shuffle === 'J' && shuffle2 === '3' || shuffle === 'J' && shuffle2 === '2' ||
    shuffle === '10' && shuffle2 === '9' || shuffle === '10' && shuffle2 === '8' || shuffle === '10' && shuffle2 === '7' || shuffle === '10' && shuffle2 === '6' ||
    shuffle === '10' && shuffle2 === '5' || shuffle === '10' && shuffle2 === '4' || shuffle === '10' && shuffle2 === '3' || shuffle === '10' && shuffle2 === '2' ||
    shuffle === '9' && shuffle2 === '8' ||  shuffle === '9' && shuffle2 === '7' || shuffle === '9' && shuffle2 === '6' ||
    shuffle === '9' && shuffle2 === '5' || shuffle === '9' && shuffle2 === '4' || shuffle === '9' && shuffle2 === '3' || shuffle === '9' && shuffle2 === '2' ||
    shuffle === '8' && shuffle2 === '7' || shuffle === '8' && shuffle2 === '7' || shuffle === '8' && shuffle2 === '6' ||
    shuffle === '8' && shuffle2 === '5' || shuffle === '8' && shuffle2 === '4' || shuffle === '8' && shuffle2 === '3' || shuffle === '8' && shuffle2 === '2' ||
    shuffle === '7' && shuffle2 === '6'|| shuffle === '7' && shuffle2 === '6' ||
    shuffle === '7' && shuffle2 === '5' || shuffle === '7' && shuffle2 === '4' || shuffle === '7' && shuffle2 === '3' || shuffle === '7' && shuffle2 === '2' ||
    shuffle === '6' && shuffle2 === '5' || shuffle === '6' && shuffle2 === '4' || shuffle === '6' && shuffle2 === '3' || shuffle === '6' && shuffle2 === '2' ||
    shuffle === '5' && shuffle2 === '4' || shuffle === '5' && shuffle2 === '3' || shuffle === '5' && shuffle2 === '2' ||
    shuffle === '4' && shuffle2 === '3' || shuffle === '4' && shuffle2 === '2' ||
    shuffle === '3' && shuffle2 === '2')
    {
      document.getElementById('winner').innerText = 'DEALER WINS!!!'
    }
    else if (shuffle === shuffle2){
    prompt('War or Surrender?')
    document.getElementById('winner').innerText = 'MAKE YOUR DECLARATION!!!!'
    if (answer === 'war' || 'WAR' || 'War'){
      function War(){
        let shuffle = player.cards[Math.floor(Math.random() * player.cards.length)];
        document.getElementsByClassName('cpucard')[0].innerText = shuffle
        // User Card
        let shuffle2 = player.cards[Math.floor(Math.random() * player.cards.length)];
        document.getElementsByClassName('usercard')[0].innerText = shuffle2

      }
    }
    }
    else {
    document.getElementById('winner').innerText = 'Player WINS!!!'
    }
//   }

// }
//
// function betting(){
//
}
