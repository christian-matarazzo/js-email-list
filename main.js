


/* add empty array */
let generateEmail = []

/* start API */
/* cycle 10 time */
for(i=0; i<10; i++)
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(emails => emails.json())
.then(email => {
        /* console.log(email.response); */

 generateEmail.push(email.response) /* push in the empty array */
 if (generateEmail.length===10){
    console.log(generateEmail);
    
 }

    })
