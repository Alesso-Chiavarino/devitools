const paths = [
    { params: { type: 'backgrounds' } },
    { params: { type: 'colors' } },
    { params: { type: 'animations' } },
    { params: { type: 'extensions' } },
    { params: { type: 'fonts' } },
    { params: { type: 'css-frameworks' } },
    { params: { type: 'image-optimizers' } },
    { params: { type: 'components' } },
    { params: { type: 'designs' } },
    { params: { type: 'icons' } },
    { params: { type: 'svg-illustrations' } },
    { params: { type: 'games' } },
    { params: { type: 'shadows' } },
    { params: { type: 'apis' } },
    { params: { type: 'modules' } },
    { params: { type: 'backend-frameworks' } },
]


const getAllTools = (req, res) => {

    // const type = req.query.type
    // return res.status(200).json(toolKits[type])

    res.send(paths);

}

export default getAllTools;