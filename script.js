

// async and await

const getAgents = async() => {
    const agentsList = await axios.get(`https://valorant-api.com/v1/agents`)
    console.log(agentsList.data.data)
}

const button = document.querySelector(`button`)
const agentInput = document.querySelector(`input`)
const agentDesc = document.getElementById(`agent-description`)
const agentImg = document.getElementById(`agent-img`)

//  now we need some functionality

button.addEventListener(`click`, async () => {
    let agent = agentInput.value
    console.log(agent)
    const agentList = await axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
    const agentData = agentList.data.data
    for(let i of agentData){
        if (agent.toLowerCase() == i.displayName.toLowerCase()){
            agentDesc.innerText = `${i.description}` 
            agentImg.src = `${i.displayIcon}`
        } 
    }
})


// add some setters