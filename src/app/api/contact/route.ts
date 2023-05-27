// import { NextResponse } from 'next/server'
// import { z } from 'zod'
// import nodemailer from 'nodemailer'

// const sendMessageFormSchema = z.object({
//   name: z
//     .string()
//     .nonempty('O nome é obrigatório')
//     .transform((name) => {
//       return name
//         .trim()
//         .split(' ')
//         .map((word) => {
//           return word[0].toLocaleUpperCase().concat(word.substring(1))
//         })
//         .join(' ')
//     }),
//   email: z
//     .string()
//     .nonempty('O e-mail é obrigatório')
//     .email('Formato de e-mail inválido'),
//   message: z.string().nonempty(),
// })

// export async function POST(request: Request) {
//   const { email, message, name } = sendMessageFormSchema.parse(
//     await request.json(),
//   )

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.hostinger.com',
//     port: 465,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   })

//   const emailSend = await transporter.sendMail({
//     from: 'contato@joaovictor09.dev',
//     to: 'contato@joaovictor09.dev',
//     replyTo: email,
//     subject: `Contato de ${name}`,
//     text: `Mensagem: ${message}`,
//   })

//   console.log(emailSend)

//   return NextResponse.json(emailSend)
// }
