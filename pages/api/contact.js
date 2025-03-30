// pages/api/contact.js

import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  //
  // 1) Manejo de la petición OPTIONS (preflight) para CORS
  //
  if (req.method === 'OPTIONS') {
    // Cabeceras de CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Devuelve 200 (OK) y termina la petición OPTIONS
    return res.status(200).end();
  }

  //
  // 2) Cabeceras de CORS para la petición real (POST)
  //
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  //
  // 3) Solo aceptamos método POST (después de la petición OPTIONS)
  //
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  //
  // 4) Extraemos datos del body. (name, email, message)
  //
  const { name, email } = req.body;

  //
  // 5) Configuramos Brevo con la API Key (usa tu variable de entorno .env)
  //
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY; // Asegúrate de tener BREVO_API_KEY en tu .env

  // Instancia del servicio de Emails Transaccionales
  const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

  //
  // 6) Configuramos el objeto de la petición de envío.
  //    - Se asume que tu plantilla en Brevo (ID=1) tiene variables {{ params.name }}, {{ params.email }}, {{ params.message }}, etc.
  //    - Reemplaza 'omarmfs10@gmail.com' con el correo a donde quieres recibirlo (o un array de varios).
  //
  const sendSmtpEmail = {
    to: [
      {
        email: 'omarmfs10@gmail.com', // Correo que recibirá el mensaje
      },
    ],
    templateId: 1, // El ID real de la plantilla en Brevo
    params: {
      name,    // Se inyecta en {{ params.name }} dentro de la plantilla
      email,   // Se inyecta en {{ params.email }}
    },
    sender: {
      name: "Omar's Website",         // Nombre que verás como remitente
      email: 'omarmfs10@gmail.com',   // Debe ser un remitente validado en tu cuenta Brevo
    },
    // Si tu plantilla ya maneja el asunto,
    // no necesitas "subject" aquí. Si deseas sobreescribirlo, descomenta:
    // subject: 'Nuevo contacto desde React 360',
  };

  //
  // 7) Enviamos el correo usando la API de Brevo
  //
  try {
    const data = await tranEmailApi.sendTransacEmail(sendSmtpEmail);
    return res.status(200).json({
      message: 'Email enviado exitosamente',
      data,
    });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return res.status(500).json({
      message: 'Error enviando correo',
      error,
    });
  }
}