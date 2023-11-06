import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between w-full">
      <Link href="/">
        <Image
          src={'/images/logo.png'}
          alt="Logo"
          width={100}
          height={100}
          className="lg:ml-[72px] w-16 h-16"
        />
      </Link>
      <div className="flex items-center gap-[10px] text-right">
        <div className="flex flex-col">
          <h3 className="text-sm italic text-[#A8A8A8]">Handicrafted by</h3>
          <p className="text-sm">Jim HLS</p>
        </div>
        <Image
          src={'/images/avatar.jpg'}
          alt="Logo"
          width={100}
          height={100}
          className="w-16 h-16 border rounded-full"
        />
      </div>
    </div>
  )
}
