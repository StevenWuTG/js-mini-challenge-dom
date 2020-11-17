/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)

const statsH2 = document.querySelector(".player h2")
statsH2.textContent = player.name

const statsEm = document.querySelector(".player em")
statsEm.textContent = player.nickname

const statsImg = document.querySelector(".player img")
statsImg.src = player.photo


console.log(statsH2)


// need to clean up

/***** Deliverable 4 *****/

function playerGoals(){

        player.goals.forEach(function(goal){
        const liGoal = document.createElement("li")
        liGoal.dataset.id = goal.id
        const pGoal = document.createElement("p")
        pGoal.textContent = goal.description
        const aGoal = document.createElement("a")
        aGoal.target = "_blank"
        aGoal.href = goal.link
        aGoal.textContent = goal.link
        liGoal.append(pGoal, aGoal)
        const ulGoal = document.querySelector("#goals")
        ulGoal.append(liGoal)
    }) 
    } 

playerGoals()


/***** Deliverable 5 *****/


// const sneakyData = document.querySelectorAll("#goals li")[2]

const sneakyData = document.querySelector("#goals li[data-id=3]")

console.log(sneakyData)
// sneakyData.remove()



