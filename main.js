
/* take nodes */

const orderedListEl = document.getElementById('random-list')
const regenButtonEl = document.getElementById('new-mails')



/* start API */
/* cycle 10 time */
function regenNumbers() { /* make a function to reuse on button */
    
/* add empty array */
let generateEmail = []
orderedListEl.innerText = "" /* flush away when button go pressed */
for (i = 0; i < 10; i++)
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(emails => emails.json())
        .then(email => {
            /* console.log(email.response); */

            generateEmail.push(email.response) /* push in the empty array */
            if (generateEmail.length === 10) {
                console.log(generateEmail);

                /* create DOM nodes */

                for (let i = 0; i < generateEmail.length; i++) {
                    const email = generateEmail[i];

                    const liEl = document.createElement('li')

                    liEl.innerText = generateEmail[i]

                    orderedListEl.appendChild(liEl)
                }
            }

        })
}

regenNumbers()

regenButtonEl.addEventListener('click', function(){

regenNumbers()

})