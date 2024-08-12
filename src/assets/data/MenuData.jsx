import pizzaImage from '../img/mainpage-category/pizzza.png';
import discountImage from '../img/mainpage-category/indirim.png';
import drinkImage from '../img/mainpage-category/icecek.png';
import sauceImage from '../img/mainpage-category/sos.png';
import dessertImage from '../img/mainpage-category/tatli.png';

const menus = [
    {
        id: 1,
        name: "Pizzalar",
        image: pizzaImage,
        link: "/menu/pizza",
    },
    {
        id: 2,
        name: "İndirimler",
        image: discountImage,
        link: "/menu/discount",
    },
    {
        id: 3,
        name: "İçecekler",
        image: drinkImage,
        link: "/menu/drink",
    },
    {
        id: 4,
        name: "Soslar",
        image: sauceImage,
        link: "/menu/sauce",
    },
    {
        id: 5,
        name: "Tatlılar",
        image: dessertImage,
        link: "/menu/dessert",
    }
];

export default menus;