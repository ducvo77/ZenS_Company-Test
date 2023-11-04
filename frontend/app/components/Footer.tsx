import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='border-t border-gray-300 xl:px-80 lg:px-52 md:px-32 sm:px-24 px-6 xl:py-10 md:py-6 py-4 flex flex-col items-center xl:gap-6 md:gap-4 gap-2'>
      <p className='text-center text-gray text-[#999999] leading-6 text-xs'>
        This website is created as part of Hlsolutions program. The materials contained on this website are provided for
        general information only and do not constitute any form of advice. HLS assumes no responsibility for the
        accuracy of any particular statement and accepts no liability for any loss or damage which may arise from
        reliance on the information contained on this site.
      </p>
      <Link href={'/'} className='text-xs text-[#696969]'>
        Copyright 2021 HLS
      </Link>
    </div>
  )
}
