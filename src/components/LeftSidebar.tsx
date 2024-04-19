import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots} from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';
import { RiTwitterXLine } from "react-icons/ri";

const NAVIGATION_ITEMS = [
  {
    title: "X",
    icon: RiTwitterXLine,
  },
  {
    title : 'Home',
    icon: BiHomeCircle,
  },
  {
    title : 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title : 'Notifications',
    icon: BsBell,
  },
  {
    title : 'Messages',
    icon: BsEnvelope,
  },
  {
    title: "BookMarks",
    icon: BsBookmark
  },
  {
    title: "Profile",
    icon :BiUser,
  }
]

const LeftSidebar = () => {
    const items = NAVIGATION_ITEMS
    return (
        <section className="fixed w-[272px] flex flex-col items-stretch h-screen">
          <div className='w-full flex flex-col items-stretch h-full space-y-4 mt-4'>
            {
              items.map((item) =>(
                <Link className='hover:bg-white/10 px-6 transition duration-200 rounded-3xl text-2xl p-2 flex items-center justify-start w-fit space-x-4' href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon/>
                  </div>
                  <div>
                  {item.title !== "X" && <div>{item.title}</div>}
                  </div>
                </Link>
              ))
            }
            <button className='rounded-full  p-4 bg-primary text-2xl text-center hover:bg-opacity-70 transition duration-200'>
              tweet
            </button>
          </div>
          <div>
            <button className='flex items-center justify-between space-x-2 w-full m-4 bg-transparent rounded-full p-4 text-center hover:bg-white/20 hover:bg-opacity-70 transition duration-200'>
                <div className='flex items-center justify-between space-x-2 w-full'>
                  <div className='flex items-center space-x-4'>
                    <div className='rounded-full bg-slate-400 size-12'></div>
                    <div className='text-sm text-left'>
                      <div className='font-semibold'>Vinicius</div>
                      <div>@Vini_G_M</div>
                    </div>
                  </div>
                  <div className='ml-auto'>
                    <BsThreeDots />
                  </div>
                </div>
              </button>
          </div>
        </section>
    )
}

export default LeftSidebar  