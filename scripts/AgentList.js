import { getBusinesses } from "./database.js"

export const AgentList = () => {
    const businesses = getBusinesses()
    const agentHTMLRepresentations = businesses.map(
        (business) => {
            return `<h2>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h2>
            <h3>${business.companyName}</h3>
            <h3>${business.phoneWork}</h3>`
        }
    
    )
    const finalHTML = agentHTMLRepresentations.join("")
    return finalHTML
}
