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
    path: '/toolkit/frameworks'
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
    name: 'DESIGNS',
    path: '/toolkit/designs'
  }, {
    name: 'DESIGNS',
    path: '/toolkit/designs'
  }, {
    name: 'DESIGNS',
    path: '/toolkit/designs'
  },
]

const ToolsContainer = () => {

  return (
    <>

      <div className="bg-black min-h-screen h-fit">
        <div className="container mx-auto">
          <h2 className="text-transparent text-6xl font-extrabold text-center pt-10 bg-clip-text bg-gradient-to-r from-white to-slate-300">Front End Toolkit</h2>
          <div className="grid grid-cols-4 gap-2 p-2 mt-10 bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 rounded-md">
            {toolkit.map((tool, i) => <Tool key={i} {...tool} />)}
          </div>
        </div>
      </div>
    </>

  );
};

export default ToolsContainer;
