import { v4 as uuid } from "uuid";
import menImage1 from "../../assets/forMens/1.png";
import menImage2 from "../../assets/forMens/2.png";
import menImage3 from "../../assets/forMens/3.png";
import menImage4 from "../../assets/forMens/4.png";
import menImage5 from "../../assets/forMens/5.png";
import menImage6 from "../../assets/forMens/6.png";
import menImage7 from "../../assets/forMens/7.png";
import menImage8 from "../../assets/forMens/8.png";
import menImage9 from "../../assets/forMens/9.png";
import menImage10 from "../../assets/forMens/10.png";
import womenImage1 from "../../assets/forWomens/1.png";
import FlowerBomb1 from "../../assets/forWomens/imgsWtihoutBG/flowerBomb1.jpg";
import FlowerBomb2 from "../../assets/forWomens/imgsWtihoutBG/flowerBomb2.jpg";
import FlowerBomb3 from "../../assets/forWomens/imgsWtihoutBG/flowerBomb3.jpg";
import Janan1 from "../../assets/forWomens/imgsWtihoutBG/janan1.jpg";
import Janan2 from "../../assets/forWomens/imgsWtihoutBG/janan2.jpg";
import GucciRush1 from "../../assets/forWomens/imgsWtihoutBG/gucciRush1.jpg";
import GucciRush2 from "../../assets/forWomens/imgsWtihoutBG/gucciRush2.jpg";
import GucciRush3 from "../../assets/forWomens/imgsWtihoutBG/gucciRush3.jpg";
import JAdore1 from "../../assets/forWomens/imgsWtihoutBG/jAdore1.jpg";
import JAdore2 from "../../assets/forWomens/imgsWtihoutBG/jAdore2.jpg";
import JAdore3 from "../../assets/forWomens/imgsWtihoutBG/jAdore3.jpg";
import BombShell1 from "../../assets/forWomens/imgsWtihoutBG/bombShell1.jpg";
import BombShell2 from "../../assets/forWomens/imgsWtihoutBG/bombShell2.jpg";
import VercasePink1 from "../../assets/forWomens/imgsWtihoutBG/versacePink1.jpg";
import VercasePink2 from "../../assets/forWomens/imgsWtihoutBG/versacePink2.jpg";
import PoisionDoir1 from "../../assets/forWomens/imgsWtihoutBG/pasionDoir1.jpg";
import PoisionDoir2 from "../../assets/forWomens/imgsWtihoutBG/pasionDoir2.jpg";
import PoisionDoir3 from "../../assets/forWomens/imgsWtihoutBG/pasionDoir3.jpg";
import GucciFlora1 from "../../assets/forWomens/imgsWtihoutBG/gucciFlora1.jpg";
import GucciFlora2 from "../../assets/forWomens/imgsWtihoutBG/gucciFlora2.jpg";
import GucciFlora3 from "../../assets/forWomens/imgsWtihoutBG/gucciFlora3.jpg";
import GucciBloom1 from "../../assets/forWomens/imgsWtihoutBG/gucciBloom1.jpg";
import GucciBloom2 from "../../assets/forWomens/imgsWtihoutBG/gucciBloom2.jpg";
import GucciBloom3 from "../../assets/forWomens/imgsWtihoutBG/gucciBloom3.jpg";
import Gucci1 from "../../assets/forWomens/imgsWtihoutBG/gucci1.jpg";
import Gucci2 from "../../assets/forWomens/imgsWtihoutBG/gucci2.jpg";
import Gucci3 from "../../assets/forWomens/imgsWtihoutBG/gucci3.jpg";
import womenImage2 from "../../assets/forWomens/2.png";
import womenImage3 from "../../assets/forWomens/3.png";
import womenImage4 from "../../assets/forWomens/4.png";
import womenImage5 from "../../assets/forWomens/5.png";
import womenImage6 from "../../assets/forWomens/6.png";
import womenImage7 from "../../assets/forWomens/7.png";
import womenImage8 from "../../assets/forWomens/8.png";
import womenImage9 from "../../assets/forWomens/9.png";
import womenImage10 from "../../assets/forWomens/10.png";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // men
  {
    _id: uuid(),
    title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml  (For Men)",
    brand: "FOGG",
    image: menImage1,
    price: "399",
    discount: "45",
    category: "men",
    rating: 4.3,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "Azzaro Wanted is a bold and adventurous men's fragrance. It opens with vibrant notes of lemon and ginger, followed by a heart of cardamom and juniper. The base is enriched with warm, woody accords of vetiver and tonka bean. (For Men)",
    brand: "DENVER",
    image: menImage2,
    price: "249",
    discount: "22",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
    additionalImages: [
      "https://via.placeholder.com/150/92c952",
      "https://via.placeholder.com/150/771796",
      "https://via.placeholder.com/150/24f355",
    ],
  },
  {
    _id: uuid(),
    title:
      "Wild Stone Edge and Ultra Sensual Perfume Combo for Men Eau de Parfum - 60 ml (For Men)",
    brand: "WILD STONE",
    image: menImage3,
    price: "498",
    discount: "40",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "ENVY Combo Perfume For Men 60ML + 60ML Eau de Parfum - 120 ml  (For Men)",
    brand: "ENVY",
    image: menImage4,
    price: "498",
    discount: "32",
    category: "men",
    rating: 3.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Eros by Versace is a passionate men's fragrance  The scent features fresh top notes of mint, green apple, and lemon. The heart reveals an aromatic blend of tonka bean, geranium, and ambroxan, while the base is a rich combination of vanilla, vetiver, oakmoss, and cedarwood (For Men)",
    brand: "FOGG",
    image: menImage5,
    price: "500",
    discount: "36",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Wild Stone Edge Perfume Eau de Parfum - 50 ml (For Men)",
    brand: "WILD STONE",
    image: menImage6,
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "Blue de Channel is a sophisticated men's fragrance with a fresh, aromatic composition. Top notes of citrus and mint blend seamlessly with a heart of pink pepper, ginger, and nutmeg, while base notes of cedar, sandalwood, and incense provide a warm, woody finish.(For Men)",
    brand: "WILD STONE",
    image: menImage7,
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Wild Stone Edge Perfume Eau de Parfum - 50 ml (For Men)",
    brand: "WILD STONE",
    image: menImage8,
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Wild Stone Edge Perfume Eau de Parfum - 50 ml (For Men)",
    brand: "WILD STONE",
    image: menImage9,
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "1 Million by Paco Rabanne is a luxurious and seductive men's fragrance. It opens with fresh top notes of blood mandarin, peppermint, and grapefruit, leading into a spicy heart of rose, cinnamon, and leather. The base is a rich blend of amber, patchouli, and woody notes, creating an irresistible and lasting scent. (For Men)",
    brand: "WILD STONE",
    image: menImage10,
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  // mens & women
  {
    _id: uuid(),
    title:
      "THE MAN COMPANY Ever Green Perfume Gift Set for Men Premium Body Spray Eau de Parfum - 100 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kz7bcsw0/perfume/l/l/v/100-ever-green-perfume-gift-set-for-men-premium-body-spray-eau-original-imagb9gbwzur6sk7.jpeg?q=70",
    price: "1848",
    discount: "35",
    category: "men & women",
    rating: 4.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "THE MAN COMPANY EDP For Men - Night - 60 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kz7bcsw0/perfume/y/o/k/60-edp-for-men-night-premium-fragrance-long-lasting-perfume-for-original-imagb9jgbrqjvx2g.jpeg",
    price: "749",
    discount: "21",
    category: "men & women",
    rating: 5,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Ajmal Ascend & Neea EDP each 100ML & Neea EDP 20ML Pack of 3 (Total 220ML) for Men & Women + 2 Parfum Testers Perfume - 220 ml (For Men & Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/klscivk0/combo-kit/z/f/2/ascend-neea-edp-each-100ml-neea-edp-20ml-pack-of-3-total-220ml-original-imagyu5e7r3zdacp.jpeg?q=70",
    price: "3600",
    discount: "65",
    category: "men & women",
    rating: 4.6,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "THE MAN COMPANY Fire | Long Lasting Perfume| Eau de Parfum - 60 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzegk280/perfume/b/p/r/60-fire-long-lasting-perfume-eau-de-parfum-the-man-company-men-original-imagbffzzsvhs4hu.jpeg",
    price: "749",
    discount: "34",
    category: "men & women",
    rating: 5,
    inStock: true,
    fastDelivery: true,
  },

  {
    _id: uuid(),
    title: "DENVER Dignity Eau de Parfum - 100 ml  (For Men & Women)",
    brand: "DENVER",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kx3l0nk0/perfume/r/b/a/100-dignity-eau-de-parfum-denver-men-women-original-imag9mmpttrn2qmu.jpeg",
    price: "499",
    discount: "18",
    category: "men & women",
    rating: 2.8,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "ENVY Combo Perfume For Men and Women 60ML + 60ML Eau de Parfum - 120 ml (For Men & Women)",
    brand: "ENVY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kkyc9zk0/perfume/k/f/d/combo-perfume-for-men-and-women-60ml-60ml-eau-de-parfum-envy-men-original-imagy6h6wyknzczt.jpeg",
    price: "599",
    discount: "32",
    category: "men & women",
    rating: 4,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Ajmal Prose EDP & Primitive Forest EDT + 4 Parfum Testers Eau de Parfum - 350 ml (For Men & Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kf5pzm80/perfume/t/6/w/350-prose-edp-primitive-forest-edt-4-parfum-testers-eau-de-original-imafvzkhrgktqrfb.jpeg?q=70",
    price: "2250",
    discount: "56",
    category: "men & women",
    rating: 5,
    inStock: true,
    fastDelivery: false,
  },
  // women
  {
    _id: uuid(),
    title:
      "A luxurious and seductive fragrance, featuring an explosive bouquet of sambac jasmine, centifolia rose, cattleya orchid, and patchouli. (For Women)",
    brand: "FOGG",
    image: womenImage1,
    price: "599",
    discount: "29",
    category: "women",
    rating: 4.1,
    inStock: true,
    fastDelivery: false,
    additionalImages: [FlowerBomb1, FlowerBomb2, FlowerBomb3],
  },
  {
    _id: uuid(),
    title:
      "A charming and romantic fragrance with floral and fruity accords, complemented by vanilla and musk (For Women)",
    brand: "ENVY",
    image: womenImage2,
    price: "449",
    discount: "17",
    category: "women",
    rating: 3.9,
    inStock: true,
    fastDelivery: true,
    additionalImages: [Janan1, Janan2],
  },
  {
    _id: uuid(),
    title:
      "An intoxicating and impulsive scent that blends gardenia, freesia, jasmine, vanilla, and patchouli to evoke passion and urgency. (For Women)",
    brand: "FOGG",
    image: womenImage3,
    price: "699",
    discount: "25",
    category: "women",
    rating: 1.2,
    inStock: true,
    fastDelivery: true,
    additionalImages: [GucciRush1, GucciRush2, GucciRush3],
  },
  {
    _id: uuid(),
    title:
      "A sophisticated and sensual fragrance combining ylang-ylang, damask rose, jasmine, and bergamot to celebrate the beauty of flowers. (For Women)",
    brand: "SKINN",
    image: womenImage4,
    price: "1595",
    discount: "25",
    category: "women",
    rating: 4.8,
    inStock: true,
    fastDelivery: false,
    additionalImages: [JAdore1, JAdore2, JAdore3],
  },
  {
    _id: uuid(),
    title:
      "A glamorous fruity-floral blend with purple passion fruit, Shangri-la peony, and vanilla orchid, exuding sensuality and elegance. (For Women)",
    brand: "AJMAL",
    image: womenImage5,
    price: "1250",
    discount: "40",
    category: "women",
    rating: 2.5,
    inStock: true,
    fastDelivery: false,
    additionalImages: [BombShell1, BombShell2],
  },
  {
    _id: uuid(),
    title:
      "A fresh, vibrant fragrance, often referred to as Versace Pink, with notes of pomegranate, yuzu, magnolia, lotus, and musk. (For Women)",
    brand: "SKINN",
    image: womenImage6,
    price: "1895",
    discount: "32",
    category: "women",
    rating: 4.5,
    inStock: true,
    fastDelivery: false,
    additionalImages: [VercasePink1, VercasePink2],
  },
  {
    _id: uuid(),
    title:
      "A bewitching scent with sweet and spicy notes of bitter almond, jasmine, caraway, vanilla, and musk. (For Women)",
    brand: "AJMAL",
    image: womenImage7,
    price: "2000",
    discount: "30",
    category: "women",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
    additionalImages: [PoisionDoir1, PoisionDoir2, PoisionDoir3],
  },
  {
    _id: uuid(),
    title:
      "A fresh and feminine scent inspired by Gucci’s floral patterns, featuring peony, citrus, osmanthus, rose, and sandalwood. (For Women)",
    brand: "AJMAL",
    image: womenImage8,
    price: "2000",
    discount: "30",
    category: "women",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
    additionalImages: [GucciFlora1, GucciFlora2, GucciFlora3],
  },
  {
    _id: uuid(),
    title:
      "A rich, white floral fragrance capturing contemporary femininity with notes of rangoon creeper, jasmine bud, and tuberose. (For Women)",
    brand: "AJMAL",
    image: womenImage9,
    price: "2000",
    discount: "30",
    category: "women",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
    additionalImages: [GucciBloom1, GucciBloom2, GucciBloom3],
  },
  {
    _id: uuid(),
    title: "Ajmal SENORA Eau de Parfum - 75 ml (For Women)",
    brand: "AJMAL",
    image: womenImage10,
    price: "2000",
    discount: "30",
    category: "women",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
    additionalImages: [Gucci1, Gucci2, Gucci3],
  },
];
