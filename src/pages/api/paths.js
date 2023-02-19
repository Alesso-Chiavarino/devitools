const frontPaths = [
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
    { params: { type: 'modules' } }
]

const backPaths = [
    { params: { type: 'apis' } },
    { params: { type: 'modules' } },
    { params: { type: 'backend-frameworks' } },
    { params: { type: 'databases' } },
]


const getAllPaths = (req, res) => {

    if (req.query.type === 'frontend') {
        return res.send(frontPaths)
    }

    res.send(backPaths);
}

export default getAllPaths;