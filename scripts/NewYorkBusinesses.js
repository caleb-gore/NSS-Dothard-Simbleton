import { getBusinesses } from "./database.js"

export const NewYorkBusinesses = () => {
    let html = ``
    const businesses = getBusinesses()
    const filteredBusinesses = businesses.filter((business) => business.addressStateCode === "NY") 
    filteredBusinesses.forEach(business => {
        html += `<h2>${business.companyName}</h2>
        <p>${business.addressFullStreet}</p>
        <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>`
    })
    return html
}

