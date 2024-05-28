import { NextResponse } from 'next/server'
export async function POST(req: Request) {
   const body = await req.json()

   const { name, email, services, message } = body

   const nodemailer = require('nodemailer')

   const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
         user: process.env.MAIL_USERNAME,
         pass: process.env.MAIL_PASSWORD,
      },
   })

   const mailData = {
      from: {
         name: process.env.MAIL_FROM_NAME,
         address: process.env.MAIL_FROM_EMAIL,
      },
      to: process.env.MAIL_TO_EMAIL,
      subject: `HQPaint Request Estimate - ${name}`,
      html: `<html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <style>
                    body {
                        height: 100%;
                        line-height: 1.4;
                        margin: 0;
                        padding: 0;
                        width: 100% !important;
                        background: #EDF2F7;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    }
                    h3 {
                        font-size: 18px;
                        font-weight: bold;
                        margin-top: 0;
                        text-align: left;
                    }
                    h4 {
                        font-size: 16px;
                        font-weight: bold;
                        margin-top: 0;
                        text-align: left;
                    }
                    .container {
                        width: 570px;
                        margin: 30px auto;
                    }
                    p {
                        font-size: 14px;
                    }
                    .logo {
                        height: 60px;
                        max-height: 60px;
                        width: auto;
                    }
                   
                    .email-body {
                        background-color: #ffffff;
                        border-color: #e8e5ef;
                        border-radius: 2px;
                        border-width: 1px;
                        box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015);
                        color: #525c65;
                        padding: 30px 20px;
                    }
                    .email-header {
                        text-align: center;
                        padding: 10px 0;
                    }
                    .email-footer {
                        text-align: center;
                        padding: 10px 0;
                    }
                    .email-footer p {
                        color: #b0adc5;
                        font-size: 12px;
                        text-align: center;
                    }
                    @media only screen and (max-width: 600px) {
                        .container {
                            width: 100% !important;
                        }
                    }
                </style>
            </head>
            <body>
            <div class="container">

                <div class="email-header">
                    <a href="${process.env.NEXT_PUBLIC_APP_DOMAIN}">
                        <img class="logo" src="${
                           process.env.NEXT_PUBLIC_APP_DOMAIN + '/logo.png'
                        }" alt="HQPaint General Construction">
                    </a>
                </div>

                <div class="email-body">

                    <h3>Hello</h3>
                    <p>You have received a request from HQPaint Website</p>

                    <h4><b>Details:</b></h4>

                    <div>
                        <p><b>Name:</b> ${name}</p>
                        <p>
                            <b>Email:</b> 
                            <a href="mailto:${email}">${email}</a>
                        </p>
                        <p><b>Services:</b> ${
                           services.length > 0
                              ? services.join(', ')
                              : 'No services requested'
                        }</p>
                        <p><b>Message:</b> ${message}</p>
                    </div>
                    
                </div>

                <div class="email-footer">
                    <p>
                        &copy; ${new Date().getFullYear()} HQPaint General Construction - All rights reserved.
                    </p>
                </div>

            </div>

            </body>
            </html>`,
   }

   try {
      await transporter.sendMail(mailData)
      return NextResponse.json({ message: 'ok' })
   } catch (error) {
      console.log(error)
      return NextResponse.error()
   }
}
