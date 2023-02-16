const toolKits = {
    "backgrounds": [
        {
            "type": "BACKGROUNDS",
            "name": "SVG Wave",
            "description": "SVG Wave is a tool that allows you to create SVG waves for your website. You can customize the color, height, and width of the wave.",
            "url": "https://getwaves.io/",
            "img": "/img/sites/backgrounds/svgwave.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "waterpipe.js",
            "description": "waterpipe.js is a tool that allows you to create water pipes for your website. You can customize the color, height, and width of the wave.",
            "url": "https://dragdropsite.github.io/waterpipe.js/",
            "img": "/img/sites/backgrounds/waterpipe.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "duotones",
            "description": "duotones is a tool that allows you to create pairings and effects images for your website. You can customize the color, height, and width of the wave.",
            "url": "https://medialoot.com/duotones/",
            "img": "/img/sites/backgrounds/duotones.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "gradienta",
            "description": "gradienta is a tool that allows you to create gradients for your website. You can customize the color, height, and width of the wave.",
            "url": "https://gradienta.io/",
            "img": "/img/sites/backgrounds/gradienta.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "bgjar",
            "description": "bgjar is a tool that allows you to create free svg background for your websites, blogs and app.",
            "url": "https://bgjar.com/",
            "img": "/img/sites/backgrounds/bgjar.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "hypercolor",
            "description": "A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.",
            "url": "https://hypercolor.dev",
            "img": "/img/sites/backgrounds/hypercolor.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "haikei",
            "description": "Haikei is a web app to generate stunning visual content ready to use with your design tools and workflow.",
            "url": "https://haikei.app",
            "img": "/img/sites/backgrounds/haikei.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "paaatterns",
            "description": "Paaatterns is a Free collection of beautiful patterns for all vector formats for you to use on your web projects.",
            "url": "https://products.ls.graphics/paaatterns/index.html",
            "img": "/img/sites/backgrounds/paaatterns.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "wickedbackgrounds",
            "description": "Wicked Backgrounds allows you to create wallpapers for your website, mobile, laptop, mobile prsentations, you can use them anywhere and export it or copy to clipboard as SVG or PNG.",
            "url": "https://wickedbackgrounds.com/",
            "img": "/img/sites/backgrounds/wickedbackgrounds.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "getwaves",
            "description": "Get Waves is a tool that allows you to create SVG waves for your website. You can customize the color, height, and width of the wave.",
            "url": "https://getwaves.io/",
            "img": "/img/sites/backgrounds/getwaves.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "blobmaker",
            "description": "Blobmaker is a free generative design tool to help you quickly create random, unique, and organic-looking SVG shapes.",
            "url": "https://www.blobmaker.app/",
            "img": "/img/sites/backgrounds/blobmaker.png"
        },
        {
            "type": "BACKGROUNDS",
            "name": "svgbackgrounds",
            "description": "Create stunning websites easily with fullscreen graphics under 5KB",
            "url": "https://www.svgbackgrounds.com/",
            "img": "/img/sites/backgrounds/svgbackgrounds.png"
        },
    ],

    "image-optimizers": [
        {
            "type": "IMAGE OPTIMIZERS",
            "name": "tinypng",
            "description": "TinyPNG is a PNG and JPEG compression tool that reduces the size of your images by 50-80% while preserving full transparency and 8-bit color.",
            "url": "https://tinypng.com/",
            "img": "/img/sites/image-optimizers/tinypng.png"
        },
        {
            "type": "IMAGE OPTIMIZERS",
            "name": "clipdrop",
            "description": "The ultimate ecosystem of apps, plugins & resources for all creators, powered by artificial intelligence.",
            "url": "https://clipdrop.co",
            "img": "/img/sites/image-optimizers/clipdrop.png"
        },
        {
            "type": "IMAGE OPTIMIZERS",
            "name": "removebg",
            "description": "Remove backgrounds 100% automatically in 5 seconds with one click.",
            "url": "https://www.remove.bg/",
            "img": "/img/sites/image-optimizers/removebg.png"
        },
        {
            "type": "IMAGE OPTIMIZERS",
            "name": "imagereziser",
            "description": "Image Reziser allows you to change the size of the image.",
            "url": "https://imageresizer.com",
            "img": "/img/sites/image-optimizers/imagereziser.png"
        },
        {
            "type": "IMAGE OPTIMIZERS",
            "name": "cleanuppictures",
            "description": "Remove any unwanted object, defect, people or text from your pictures in seconds.",
            "url": "https://cleanup.pictures",
            "img": "/img/sites/image-optimizers/cleanuppictures.png"
        },
    ]
}


const getTools = (req, res) => {

    if (req.query.type) {
        const type = req.query.type
        return res.status(200).json(toolKits[type])
    }

    res.send('send a type')

    // const type = 'color'

    // const tool = toolKits[type]

    // console.log(tool)

    // res.send(tool)





}

export default getTools;