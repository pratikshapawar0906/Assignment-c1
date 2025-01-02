const joi=require('joi')

const contactValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        phone: joi.string().min(10).max(15).pattern(/^[0-9]+$/).required(), // added a pattern for phone
        message: joi.string().min(10).max(10000).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400)
            .json({message :"Bad request",error})
    }

    next();
};

module.exports= { 
   
    contactValidation
}
