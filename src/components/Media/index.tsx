import Image from "next/image"
import Link from "next/link"

const Media = () => {
  return (
    <div className="absolute hidden desktop:block top-0 desktop:left-[2.343vw] ">
      <div className="desktop:w-[0.073vw] desktop:h-[13.943vw] bg-gray animate-media-line absolute" />
      <div className="animate-media-balls relative desktop:-left-[1.095vw] desktop:translate-y-[14.527vw] flex flex-col desktop:gap-[0.584vw]">
        <Link href='https://www.linkedin.com/in/youssef-nesafe/'>
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
        <Link href='https://github.com/YoussefNesafe' className="absolute animate-github-icon delay-1500 ">
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
