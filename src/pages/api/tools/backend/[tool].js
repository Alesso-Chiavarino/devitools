const toolKits = {
    "backend-frameworks": [
        {
            "type": "BACKEND FRAMEWORKS",
            "name": "express",
            "description": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
            "url": "https://expressjs.com/",
            "img": "/img/sites/backend/backend-frameworks/express.png"
        },
        {
            "type": "BACKEND FRAMEWORKS",
            "name": "koa",
            "description": "Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.",
            "url": "https://koajs.com/",
            "img": "/img/sites/backend/backend-frameworks/koa.png"
        },
        {
            "type": "BACKEND FRAMEWORKS",
            "name": "nest",
            "description": "Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Progamming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
            "url": "https://nestjs.com/",
            "img": "/img/sites/backend/backend-frameworks/nest.png"
        }
    ],
    "modules": [
        {
            "type": "MODULES",
            "name": "bcrypt",
            "description": "A library to help you hash passwords.",
            "url": "https://www.npmjs.com/package/bcrypt",
            "img": "/img/sites/backend/modules/bcrypt.png"
        },
        {
            "type": "MODULES",
            "name": "cors",
            "description": "CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.",
            "url": "https://www.npmjs.com/package/cors",
            "img": "/img/sites/backend/modules/cors.png"
        },
        {
            "type": "MODULES",
            "name": "dotenv",
            "description": "Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.",
            "url": "https://www.npmjs.com/package/dotenv",
            "img": "/img/sites/backend/modules/dotenv.png"
        },
        {
            "type": "MODULES",
            "name": "express-session",
            "description": "Simple session middleware for Express.",
            "url": "https://www.npmjs.com/package/express-session",
            "img": "/img/sites/backend/modules/express-session.png"
        },
        {
            "type": "MODULES",
            "name": "connect-mongo",
            "description": "MongoDB session store for Connect and Express written in TypeScript.",
            "url": "https://www.npmjs.com/package/connect-mongo",
            "img": "/img/sites/backend/modules/connect-mongo.png"
        },
        {
            "type": "MODULES",
            "name": "cookie-parser",
            "description": "Parse Cookie header and populate req.cookies with an object keyed by the cookie names.",
            "url": "https://www.npmjs.com/package/cookie-parser",
            "img": "/img/sites/backend/modules/cookie-parser.png"
        },
        {
            "type": "MODULES",
            "name": "express-handlebars",
            "description": "A Handlebars view engine for Express which doesn't suck.",
            "url": "https://www.npmjs.com/package/express-handlebars",
            "img": "/img/sites/backend/modules/express-handlebars.png"
        },
        {
            "type": "MODULES",
            "name": "mongoose",
            "description": "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.",
            "url": "https://www.npmjs.com/package/mongoose",
            "img": "/img/sites/backend/modules/mongoose.png"
        },
        {
            "type": "MODULES",
            "name": "passport",
            "description": "Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.",
            "url": "https://www.npmjs.com/package/passport",
            "img": "/img/sites/backend/modules/passport.png"
        },
        {
            "type": "MODULES",
            "name": "passport-local",
            "description": "Passport strategy for authenticating with a username and password.",
            "url": "https://www.npmjs.com/package/passport-local",
            "img": "/img/sites/backend/modules/passport-local.png"
        },
        {
            "type": "MODULES",
            "name": "nodemon",
            "description": "Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.",
            "url": "https://www.npmjs.com/package/nodemon",
            "img": "/img/sites/backend/modules/nodemon.png"
        },
        {
            "type": "MODULES",
            "name": "morgan",
            "description": "HTTP request logger middleware for node.js",
            "url": "https://www.npmjs.com/package/morgan",
            "img": "/img/sites/backend/modules/morgan.png"
        },
        {
            "type": "MODULES",
            "name": "nodemailer",
            "description": "Nodemailer is a module for Node.js applications to allow easy as cake email sending.",
            "url": "https://www.npmjs.com/package/nodemailer",
            "img": "/img/sites/backend/modules/nodemailer.png"
        },
        {
            "type": "MODULES",
            "name": "image-size",
            "description": "Get image size and type from Buffer or String.",
            "url": "https://www.npmjs.com/package/image-size",
            "img": "/img/sites/backend/modules/image-size.png"
        }
    ],
    "databases": [
        {
            "type": "DATABASES",
            "name": "mongodb",
            "description": "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
            "url": "https://www.mongodb.com/",
            "img": "/img/sites/backend/databases/mongodb.png"
        },
        {
            "type": "DATABASES",
            "name": "mysql",
            "description": "MySQL is an open-source relational database management system (RDBMS). Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured Query Language.",
            "url": "https://www.mysql.com/",
            "img": "/img/sites/backend/databases/mysql.png"
        },
        {
            "type": "DATABASES",
            "name": "postgresql",
            "description": "PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance.",
            "url": "https://www.postgresql.org/",
            "img": "/img/sites/backend/databases/postgresql.png"
        },
        {
            "type": "DATABASES",
            "name": "firebase",
            "description": "Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services, such as a realtime database and authentication.",
            "url": "https://firebase.google.com/",
            "img": "/img/sites/backend/databases/firebase.png"
        }
    ],
    "apis": [
        {
            "type": "APIS",
            "name": "stripe",
            "description": "Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management.",
            "url": "https://stripe.com/",
            "img": "/img/sites/backend/apis/stripe.png"
        },
        {
            "type": "APIS",
            "name": "mercado pago",
            "description": "Mercado Pago is a payment gateway that allows you to accept payments from customers in Argentina, Brazil, Mexico, Chile, Colombia, Uruguay and Peru.",
            "url": "https://www.mercadopago.com.ar/developers/es/reference",
            "img": "/img/sites/backend/apis/mercado-pago.png"
        }
    ]
}


const getTools = (req, res) => {

    if (req.query.tool) {
        const type = req.query.tool
        return res.status(200).json(toolKits[type])
    }
    // console.log(req.query.tool)

    res.send('send a type');

}

export default getTools;