import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-center z-[40] w-full h-[110px] px-10 md:px-20">
      <div className="flex justify-between mt-9 z-50 items-center w-3/5 lg:w-4/5 bg-white">
        <div className="flex">
          <Image
            src="/MainLogo.svg"
            alt="logo"
            width={200}
            height={200}
            className="object-contain border-r-2"
          />
          <div className="flex flex-row items-center text-[15px] font-semibold ml-10">
            <div className="mr-6">메뉴보기</div>
            <div className="mr-6">식사</div>
            <div className="mr-6">반찬</div>
            <div className="mr-6">오시는 길</div>
          </div>
        </div>
        <div className="flex h-full items-center gap-8 mr-7 pl-7 border-l-2 text-[18px] font-semibold ">
            <FaSearch className=""/>
            <BsCart4 color="red"  className="" />
            <GiHamburgerMenu color="FFA732" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
