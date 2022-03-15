import characterData from "./data.js"
import Character from "./Character.js"

const attackBtn = document.getElementById("attack-button")
let isWaiting = false
let monstersArray = ["orc", "demon", "goblin"]

/*
Challenge
1. Disable the user's ability to attack when a monster dies.
2. Reneable the user's ability to attack when a new monster
loads.
3. When the game is over, disable the user's ability to attack.
**hint.md for help!!**
*/

function attack() {
   if (!isWaiting) {
      wizard.setDiceHtml()
      monster.setDiceHtml()
      wizard.takeDamage(monster.currentDiceScore)
      monster.takeDamage(wizard.currentDiceScore)

      if (wizard.isDead) {
         endGame()
      } else if (monster.isDead) {
         isWaiting = true
         if (monstersArray.length > 0) {
            setTimeout(() => {
               monster = getNewMonster()
               render()
               isWaiting = false
            }, 1250)
         } else {
            endGame()
         }
      }
      render()
   }
}

attackBtn.addEventListener("click", attack)

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

function endGame() {
   isWaiting = true
   const endMessage = monster.isDead && wizard.isDead ? "No victors - all creatures are dead"
   : monster.isDead ? "The Wizard Wins"
   : "The monsters are Victorious" 
   const endEmoji = (!wizard.isDead) ? "🔮" : "☠️"

   setTimeout(() => {
      document.body.innerHTML = `
      <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
      </div>` 
   }, 1500) 
}

function render() {
   document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
   document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()