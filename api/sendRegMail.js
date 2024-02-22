import nodemailer from 'nodemailer';

const transporter=nodemailer.createTransport({
    service:'Gmail',
    host:'smtp.google.com',
    port:465,
    secure:true,
    auth:{
        user:'bahaasalaheldin30@gmail.com',
        pass:'wyee oalk mqrs wciy'
    }
})

async function sendConfirmationMail(){
   const info=await transporter.sendMail({
    from:'bahaasalaheldin30@gmail.com',
    to:'bahaa_salaheldin@live.com',
    subject:'Hello from Short URL!',
    // text:`to continue registration click the link below:<html><body><a href="localhost:5000/confirm"></a></body></html>`
    html:"<body><b>Hi from Bahaa</b><br/><a href='http://localhost:5000/confirm'>click here!</a></body>"
   })
   return info;
}

export default sendConfirmationMail;