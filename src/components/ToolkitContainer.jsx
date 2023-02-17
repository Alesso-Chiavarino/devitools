import Tool from "./Tool";

export const toolkit = [
  {
    name: 'BACKGROUNDS',
    path: '/toolkit/backgrounds'
  },
  {
    name: 'COLORS',
    path: '/toolkit/colors'
  },
  {
    name: 'ANIMATIONS',
    path: '/toolkit/animations'
  },
  {
    name: 'EXTENSIONS',
    path: '/toolkit/extensions'
  },
  {
    name: 'FONTS',
    path: '/toolkit/fonts'
  },
  {
    name: 'CSS FRAMEWORKS',
    path: '/toolkit/css-frameworks'
  },
  {
    name: 'IMAGE OPTIMIZERS',
    path: '/toolkit/image-optimizers'
  },
  {
    name: 'COMPONENTS',
    path: '/toolkit/components'
  },
  {
    name: 'DESIGNS',
    path: '/toolkit/designs'
  },
  {
    name: 'ICONS',
    path: '/toolkit/icons'
  },
  {
    name: 'DESIGNS',
    path: '/toolkit/designs'
  },
  {
    name: 'SVG ILLUSTRATIONS',
    path: '/toolkit/svg-illustrations'
  },
  {
    name: 'GAMES',
    path: '/toolkit/games'
  },
  {
    name: 'SHADOWS',
    path: '/toolkit/shadows'
  },
  {
    name: 'APIS',
    path: '/toolkit/apis'
  },
  {
    name: 'MODULES',
    path: '/toolkit/modules'
  },
]

const ToolsContainer = () => {

  return (
    <>

      <div className="bg-black min-h-screen h-fit" id="front">
        <div className="container mx-auto pb-10 flex w-[80%] text-center flex-col gap-16">
          <div>
            <h2 className="text-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold text-center pt-10 bg-clip-text bg-gradient-to-tr from-white to-slate-300">Front End Toolkit</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-2 mt-10 bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 rounded-md">
              {toolkit.map((tool, i) => <Tool key={i} {...tool} />)}
            </div>
          </div>
          <div>
            <h2 className="text-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold text-center pt-10 bg-clip-text bg-gradient-to-tr from-white to-slate-300">Back End Toolkit</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-2 mt-10 bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 rounded-md">
              {toolkit.map((tool, i) => <Tool key={i} {...tool} />)}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ToolsContainer;
