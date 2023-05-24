const aws = require("aws-sdk");

aws.config.update({ region:"ap-south-1" });

const ses = new aws.SES({ region:"ap-south-1" });

exports.handler = async function (event) {
    try{
        const body = JSON.parse(event.body);
        const name = body?.name;
        const email = body?.email;
        const subject = body?.subject;
        const message = body?.message;

        const params = {
            Destination:{
                ToAddresses: ["csshubh09@gmail.com"],
            },
            Message:{
                Body:{
                    Text:{
                        Data: `${message} 
                        From ${name} - ${email}`,
                    },
                },
                subject: {Data: "Contact Message from " + name },
            },
            Source: "csshubh09@gmail.com",
            ReplyToAddresses: [email],
        };

        const emailResult = await ses.sendEmail(params).promise();

        const response ={
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
               body: JSON.stringify(emailResult),
           };
           return response;
        }
        catch(error){
            const response ={
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                   body: JSON.stringify(error),
               };
               return response;
            
        }
};



  