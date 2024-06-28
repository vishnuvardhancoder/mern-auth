import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='bg-sky-200 p-3'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
            <h1 className='font-bold text-lg md:text-xl'>V-AUTH</h1>
            </Link>
            <ul className='flex items-center gap-4'>
                <Link to='/'>
                <li className='hover:text-rose-500 text-lg'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hover:text-rose-500 text-lg'>About</li>
                </Link>
                <Link to='/profile'>
                {currentUser ? (
                  <img src={currentUser.profilePicture} alt="profile" className='h-10 w-10 rounded-full object-cover' />
                ):<button
                class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                Sign In
              </button>
              
              }
                </Link>
            </ul>
        </div>
    </div>
  )
}
