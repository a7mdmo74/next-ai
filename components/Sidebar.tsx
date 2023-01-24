import { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { ThemeContext } from '../context/ThemeProvider';
import { BsSun } from 'react-icons/bs';
type Props = {};

const Sidebar = (props: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/50 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20 border-slate-300 p-3 ">
          <span className="mr-4 text-lg">
            <AiOutlinePlus />
          </span>
          <p className="text-sm">New Chat</p>
        </div>
      </div>
      <div className="absolute bottom-0 px-2 w-full z-10">
        <div className="border-t-[1px] border-white/30">
          <ul className="flex flex-col space-y-3 my-4">
            <li
              className="flex items-center hover:bg-gray-500/50 py-2 px-4 rounded-lg cursor-pointer"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <>
                  <span className="mr-3">
                    <BsSun />
                  </span>
                  Light Mode
                </>
              ) : (
                <>
                  <span className="mr-3">
                    <MdDarkMode />
                  </span>
                  Dark Mode
                </>
              )}
            </li>
            <li className="flex items-center hover:bg-gray-500/50 py-2 px-4 rounded-lg cursor-pointer">
              <span className="mr-3">
                <FaDiscord />
              </span>
              OpenAi Discord
            </li>
            <li className="flex items-center hover:bg-gray-500/50 py-2 px-4 rounded-lg cursor-pointer">
              <span className="mr-3">
                <HiArrowTopRightOnSquare />
              </span>
              Updates & FAQ
            </li>
            <li className="flex items-center hover:bg-gray-500/50 py-2 px-4 rounded-lg cursor-pointer">
              <span className="mr-3">
                <FiLogOut />
              </span>
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
