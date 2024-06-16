import Image from "next/image"
import Link from "next/link"

const Media = () => {
  return (
    <div className=" hidden desktop:block  desktop:left-[2.343vw] z-50 fixed top-0">
      <div className="desktop:w-[0.073vw] desktop:h-[9vw] bg-gray animate-media-line absolute" />
      <div className="animate-media-balls relative desktop:-left-[1.095vw] desktop:translate-y-[10vw] flex flex-col desktop:gap-[0.584vw]">
        <Link href='https://www.linkedin.com/in/youssef-nesafe/' target='_blank'>
          <Image
            src='/icons/Linkedin.svg'
            alt="Linkedin"
            width={32}
            height={32}
            className=" desktop:w-[2.336vw] desktop:h-[2.336vw]"
          />
        </Link>
        <Link href='mailto:ynessafe@gmail.com' className="absolute animate-email-icon delay-1500">
          <Image
            src='/icons/Email.svg'
            alt="Email"
            width={32}
            height={32}
            className="desktop:w-[2.336vw] desktop:h-[2.336vw]"
          />
        </Link>
        <Link href='https://github.com/YoussefNesafe' target='_blank' className="absolute animate-github-icon delay-1500 ">
          <Image
            src='/icons/Github.svg'
            alt="Github"
            width={32}
            height={32}
            className="desktop:w-[2.336vw] desktop:h-[2.336vw]"
          />
        </Link>
      </div>
    </div>
  )
}

export default Media
