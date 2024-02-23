const {validationResult, check}=require('express-validator')


// category validation
exports.categoryValidation=[
    check('category_name','category is required').notEmpty()
    .isLength({min:3}).withMessage('Category name must be minimum of 3 or more character')
]

// product validation
exports.productValidation=[
    check('product_name','product is required').notEmpty()
    .isLength({min:3}).withMessage('product name must be minimum of 3 or more character'),
    check('product_price','price is required').notEmpty()
    .isNumeric().withMessage('price must be in numeric value'),
    check('countInStock','stock is required').notEmpty()
    .isNumeric().withMessage('stock must be in numeric value'),
    check('product_description','description is required').notEmpty()
    .isLength({min:3}).withMessage('description must be 3 or more character'),
    check('category','category is required').notEmpty(),
]

// user Validation
exports.userValidation=[
    check('name','User name is required').notEmpty()
    .isLength({min:2}).withMessage('name must be minimum of 2 characters'),
    check('email','email must be required').notEmpty()
    .isEmail().withMessage('Email format invalid'),
    check('password','password is required').notEmpty()
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
    .matches(/[0-9]/).withMessage('Password must contain at least one numeric digit.')
    .matches(/[@.#_]/).withMessage('Password must contain at least one special character.')
    .isLength({min:8}).withMessage('Password must be at least 8 characters')
]

// password validation
exports.passwordValidation=[
    check('password','password is required').notEmpty()
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
    .matches(/[0-9]/).withMessage('Password must contain at least one numeric digit.')
    .matches(/[@.#_]/).withMessage('Password must contain at least one special character.')
    .isLength({min:8}).withMessage('Password must be at least 8 characters')
]


// for validation error msg
exports.validation=(req,res,next)=>{
    const errors= validationResult(req)
    if(errors.isEmpty()){
        next()
    }
    else{
        return res.status(400).json({error: errors.array()[0].msg})
    }
}
