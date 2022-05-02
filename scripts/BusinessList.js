import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

export const BusinessList = () => {
    let html = ``
    businesses.forEach((business) => {
        html += `<h2>${business.companyName}</h2>
        <p>${business.addressFullStreet}</p>
        <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>`
    })
    return html
}


document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */

                    const foundBusiness = businesses.find(
                        // Your callback function goes here
                        business => business.purchasingAgent.nameFirst.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()) || business.purchasingAgent.nameLast.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())
                    )

                    companySearchResultArticle.innerHTML = `<h2>${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}</h2>
                    <h3>${foundBusiness.companyName}</h3>
                    <h3>${foundBusiness.phoneWork}</h3>`;
                }
        });


/* 
To make includes() case insensitive in JavaScript, convert both of the strings in the comparison to lowercase using toLowerCase() 
*/