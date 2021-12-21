import { projectCards, getTemplateCard } from './js/app.js'

const cardContainer = document.getElementById("cards")

projectCards.forEach( (card, index) => {
    const templateHTMLCard = getTemplateCard(card.title,card.description, card.imgSrc, card.state, card.githubUrl)
    cardContainer.innerHTML += templateHTMLCard
})

