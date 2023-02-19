import Tool from "./Tool";

export const FrontToolkit = [
  {
    name: 'BACKGROUNDS',
    path: '/toolkit/frontend/backgrounds'
  },
  {
    name: 'COLORS',
    path: '/toolkit/frontend/colors'
  },
  {
    name: 'ANIMATIONS',
    path: '/toolkit/frontend/animations'
  },
  {
    name: 'EXTENSIONS',
    path: '/toolkit/frontend/extensions'
  },
  {
    name: 'FONTS',
    path: '/toolkit/frontend/fonts'
  },
  {
    name: 'CSS FRAMEWORKS',
    path: '/toolkit/frontend/css-frameworks'
  },
  {
    name: 'IMAGE OPTIMIZERS',
    path: '/toolkit/frontend/image-optimizers'
  },
  {
    name: 'COMPONENTS',
    path: '/toolkit/frontend/components'
  },
  {
    name: 'DESIGNS',
    path: '/toolkit/frontend/designs'
  },
  {
    name: 'ICONS',
    path: '/toolkit/frontend/icons'
  },
  {
    name: 'DESIGNS',
    path: '/toolkit/frontend/designs'
  },
  {
    name: 'SVG ILLUSTRATIONS',
    path: '/toolkit/frontend/svg-illustrations'
  },
  {
    name: 'GAMES',
    path: '/toolkit/frontend/games'
  },
  {
    name: 'SHADOWS',
    path: '/toolkit/frontend/shadows'
  },
  {
    name: 'APIS',
    path: '/toolkit/frontend/apis'
  },
  {
    name: 'MODULES',
    path: '/toolkit/frontend/modules'
  },
]

export const BackToolkit = [
  {
    name: 'BACKEND FRAMEWORKS',
    path: '/toolkit/backend/backend-frameworks'
  },
  {
    name: 'MODULES',
    path: '/toolkit/backend/modules'
  },
  {
    name: 'DATABASES',
    path: '/toolkit/backend/databases'
  },
  {
    name: 'APIS',
    path: '/toolkit/backend/apis'
  }
]

const ToolsContainer = () => {

  return (
    <>

      <div className="bg-black min-h-screen h-fit" id="front">
        <div className="container mx-auto pb-10 flex w-[80%] text-center flex-col gap-16">
          <div>
            <h2 className="text-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold text-center pt-10 bg-clip-text bg-gradient-to-tr from-white to-slate-300">Front End Toolkit</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-2 mt-10  rounded-md">
              {FrontToolkit.map((tool, i) => <Tool key={i} {...tool} />)}
            </div>
          </div>
          <div>
            <h2 className="text-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold text-center pt-10 bg-clip-text bg-gradient-to-tr from-white to-slate-300">Back End Toolkit</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-2 mt-10 rounded-md">
              {BackToolkit.map((tool, i) => <Tool key={i} {...tool} />)}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ToolsContainer;
