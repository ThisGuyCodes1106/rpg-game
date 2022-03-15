import {
   getDiceRollArray,
   getDicePlaceholderHtml,
   getPercentage
} from "./utils.js"

function Character(data) {
   Object.assign(this, data)

   this.diceHtml = getDicePlaceholderHtml(this.diceCount)

   this.setDiceHtml = function () {
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      this.diceHtml = this.currentDiceScore.map(number =>
         `<div class="dice">${number}</div>`).join("")
   }

   this.maxHealth = this.health
   //Note 1

   this.getHealthBarHtml = function () {
      const percent = getPercentage(this.health, this.maxHealth)
      return `
     <div class="health-bar-outer">
     <div class="health-bar-inner ${percent < 25 ? 'danger' : ""}" 
     style="width: ${percent}%"></div>
     </div>`
   }

   this.takeDamage = function (attackScoreArray) {
      const totalAttackScore = attackScoreArray.reduce((total, number) => total + number)
      this.health -= totalAttackScore
      if (this.health <= 0) {
         this.health = 0
         this.isDead = true
      }
   }

   this.getCharacterHtml = function () {
      const {elementId, name, avatar, health, diceCount, diceHtml} = this
      const healthBar = this.getHealthBarHtml()

      return `
     <div class="character-card">
     <h4 class="name"> ${name} </h4>
     <img class="avatar" src="${avatar}"/>
     <p class="health">health: <b>${health}</b></p>
     ${healthBar}
     <div class="dice-container"> ${diceHtml} </div>
     </div> 
     `
   }
}

export default Character

// Notes
// 1) works because charecter is only called once parts of it are called multiple times so maxhealth will not change