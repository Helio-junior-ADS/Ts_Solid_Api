import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer"

export class MailtrapMailProvider implements IMailProvider {
 private transporte: Mail

  constructor(){
    this.transporte = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth:{
        user:"8cd2703b1e1815",
        pass: "3d3907345cf0bc"

      }
    })
  }
  
  
  async sendMail(message: IMessage): Promise<void> {
    await this.transporte.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}