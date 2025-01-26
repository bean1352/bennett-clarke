// utils/emailTemplate.ts
interface EmailTemplateProps {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }
  
  export const contactEmailTemplate = ({ 
    name, 
    email, 
    phone, 
    message 
  }: EmailTemplateProps): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
          body { font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; }
          .email-container { background-color: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 30px; }
          .logo { max-width: 150px; margin-bottom: 20px; display: block; }
          .header { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .field-label { color: #7f8c8d; font-weight: bold; display: block; margin-bottom: 5px; }
          .field-value { color: #2c3e50; }
          .message { background-color: #f9f9f9; border-left: 4px solid #3498db; padding: 15px; margin-top: 15px; }
      </style>
  </head>
  <body>
      <div class="email-container">
          <img src="${process.env.NEXT_PUBLIC_DOMAIN}/logo.png" alt="Bennett Clarke Solutions Logo" class="logo">
          
          <h2 class="header">New Contact Form Submission</h2>
          
          <div class="field">
              <span class="field-label">Name:</span>
              <span class="field-value">${name}</span>
          </div>
          
          <div class="field">
              <span class="field-label">Email:</span>
              <span class="field-value">${email}</span>
          </div>
          
          ${phone ? `
          <div class="field">
              <span class="field-label">Phone:</span>
              <span class="field-value">${phone}</span>
          </div>
          ` : ''}
          
          <div class="message">
              <span class="field-label">Message:</span>
              <p class="field-value">${message}</p>
          </div>
      </div>
  </body>
  </html>
  `;