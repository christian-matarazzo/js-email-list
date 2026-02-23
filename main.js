


/* add empty array */
let generateEmail = []

/* start API */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(emails => emails.json())
.then(email => {
        console.log(email.response);
        
        
/* cycle 10 time */
        for(i=0; i<10; i++)

            generateEmail.push(email.response) /* push in the empty array */

            console.log(generateEmail);

    })
