import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHome, faRing, faStar } from "@fortawesome/free-solid-svg-icons";
import { RouteNames } from "../router";

export const MenuList = [
    {text: "Главная", navigateTo: RouteNames.HOME, key: "Home", icon: faHome},
    {text: "Обаяние", navigateTo: RouteNames.CHARM, key: "Charm", icon: faHeart},
    {text: "Близость", navigateTo: RouteNames.PROXIMITY, key: "Proximity", icon: faRing},
    {text: "Таланты", navigateTo: RouteNames.TALENTS, key: "Talents", icon: faStar},
]

export const enMenuList = [
    {text: "Home", navigateTo: RouteNames.HOME, key: "Home", icon: faHome},
    {text: "Charm", navigateTo: RouteNames.CHARM, key: "Charm", icon: faHeart},
    {text: "Proximity", navigateTo: RouteNames.PROXIMITY, key: "Proximity", icon: faRing},
    {text: "Talents", navigateTo: RouteNames.TALENTS, key: "Talents", icon: faStar},
]