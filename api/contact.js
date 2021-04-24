import NextCors from 'nextjs-cors';
import sendinblue from "../lib/sendinblue";

export default async (req, res) => {    
    const { email, name, message } = req.body;
    let sendSmtpEmail = {
        to: [{
            email
        }],
        templateId: 1,
        params: {
            name,
            email
        },
        message: message,
    };
    await NextCors(req, res, {
        // Options
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200
    }).then(async () => {
        await sendinblue(sendSmtpEmail).then(function(data) {
            res.status(200).json({
                message: 'Email sended successfully',
                data
            });
        }, function(error) {
            res.status(error.status).json({
                error
            })
        });
    });
}