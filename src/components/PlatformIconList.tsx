import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiCommodore, SiSega, SiAtari, SiD3Dotjs } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon, Image } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import neogeoLogo from '../assets/Neo_Geo_logo.webp';


interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  
  const NeoGeoIcon = () => (
    <Image boxSize="18px" src={neogeoLogo} ></Image>
  )

  //key-value pairs, key: string; value: IconType 
  const iconMap: { [key: string]: IconType } = {
    "pc": FaWindows,
    "playstation": FaPlaystation,
    "xbox": FaXbox,
    "nintendo": SiNintendo,
    "mac": FaApple,
    "linux": FaLinux,
    "android": FaAndroid,
    "ios": MdPhoneIphone,
    "web": BsGlobe,
    "commodore-amiga": SiCommodore, 
    "sega": SiSega, 
    "atari": SiAtari, 
    "3do": SiD3Dotjs, 
    "neo-geo": NeoGeoIcon, 
    
  };

  return (
    <HStack spacing="5px" marginY={2} >
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.400"
        ></Icon>
      ))}

    </HStack>
  );
};

export default PlatformIconList;
