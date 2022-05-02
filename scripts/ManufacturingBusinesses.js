import { getBusinesses } from "./database.js"

export const ManufacturingBusinesses = () => {
    let html = ``
    const businesses = getBusinesses()
    const filteredBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing") 
    filteredBusinesses.forEach(business => {
        html += `<h2>${business.companyName}</h2>
        <p>${business.addressFullStreet}</p>
        <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>`
    })
    return html
}

