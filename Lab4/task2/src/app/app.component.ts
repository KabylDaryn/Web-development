import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories: Category[] = [
    { id: 1, name: '📱 Смартфоны', description: 'Телефоны и аксессуары' },
    { id: 2, name: '💻 Электроника', description: 'Ноутбуки, комплектующие' },
    { id: 3, name: '🎯 Гаджеты', description: 'Планшеты, дроны и другое' },
    { id: 4, name: '🛒 Магазины', description: 'Магазины и аксессуары' },
  ];

  allProducts: Product[] = [
    {
      id: 112809322, categoryId: 1,
      name: 'Смартфон OPPO A78 8 ГБ/256 ГБ зеленый',
      description: 'OPPO A78 8 ГБ/256 ГБ — стильный смартфон с AMOLED-дисплеем и аккумулятором 5000 мА·ч. 8 ГБ ОЗУ, 256 ГБ памяти, двойная камера 50 МП и поддержка NFC.',
      price: 109990, rating: 4.9, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hfb/83109614714910.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/pab/64514776.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/paa/64514779.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/pa8/64514780.png',
      ],
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-zelenyi-112809322/'
    },
    {
      id: 149777154, categoryId: 1,
      name: 'Чехол для OPPO A78 серый',
      description: 'Надёжная защита для OPPO A78. Силиконовый материал, удобная подставка, точные вырезы для портов.',
      price: 898, rating: 4.0, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/p80/92629588.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p01/p8f/78716740.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-oppo-a78-seryi-149777154/'
    },
    {
      id: 101115165, categoryId: 2,
      name: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12GB',
      description: 'Система охлаждения WINDFORCE 3X с 3 вентиляторами 80 мм, 5 тепловых трубок, RGB-подсветка 16.7 млн оттенков.',
      price: 269990, rating: 4.8, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h27/64026161971230.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h6e/64026167672862.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h27/64026171277342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h4a/64026164985886.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12gb-101115165/'
    },
    {
      id: 104151899, categoryId: 2,
      name: 'Блок питания Deepcool PF550 550 Вт',
      description: 'ATX блок питания 550 Вт, входное напряжение 200-240 В, активный PFC, вентилятор 120 мм, кабели 20+4pin, CPU 4+4pin, 6x SATA, 2x PCI-E.',
      price: 22990, rating: 4.8, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/he9/86350817132574.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h0b/86350817165342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hff/86350817198110.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h70/86350817230878.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/deepcool-pf550-r-pf550d-ha0b-eu-550-vt-104151899/'
    },
    {
      id: 100956618, categoryId: 2,
      name: 'Мышь Logitech G102 Lightsync черный',
      description: 'Игровая мышь с датчиком 8000 dpi, 6 программируемыми кнопками, металлическим пружинным механизмом и RGB-подсветкой LIGHTSYNC.',
      price: 6998, rating: 4.9, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/p9b/105790332.jpeg',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/hea/64119545036830.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/'
    },
    {
      id: 102073038, categoryId: 2,
      name: 'Ноутбук HP 15s 15.6" / 8 Гб / SSD 512 Гб',
      description: 'Ноутбук с экраном 15.6", Intel Core, 8 ГБ ОЗУ, SSD 512 ГБ, Windows 10. Тонкие рамки 6.5 мм, быстрая зарядка HP Fast Charge.',
      price: 298663, rating: 4.9, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/he4/64217326780446.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/hf3/64217330614302.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/hdd/64217333825566.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hc8/64217336447006.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/hp-15s-15-6-8-gb-ssd-512-gb-win-10-15s-fq2074ur-4a793ea-102073038/'
    },

  
    {
      id: 140639712, categoryId: 3,
      name: 'Планшет Xiaomi Redmi Pad 2 11" 8 Гб/256 Гб серый',
      description: 'Планшет с 11" экраном, MediaTek Helio G100 Ultra, 8 ГБ ОЗУ, 256 ГБ памяти и аккумулятором 9000 мА·ч.',
      price: 107629, rating: 5.0, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p43/46204509.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/p63/p41/46204511.png',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/'
    },
    {
      id: 115974804, categoryId: 3,
      name: 'Микрофон K6 черный/желтый',
      description: 'Беспроводной петличный микрофон с Bluetooth для iPhone и Android. До 8 часов работы, шумоподавление, совместим с Type-C и Lightning.',
      price: 3577, rating: 4.2, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/p55/3940198.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/p9f/3940203.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p9f/3940205.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p9f/3940206.png',
      ],
      link: 'https://kaspi.kz/shop/p/mikrofon-k6-chernyi-zheltyi-115974804/'
    },
    {
      id: 117690906, categoryId: 3,
      name: 'Смарт-часы Nepro100device Man QZ2 50 мм черный',
      description: 'Мужские умные часы с IPS-экраном, мониторингом пульса и кислорода, GPS, автономностью 7 дней и защитой IP67.',
      price: 20890, rating: 4.9, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p33/37686625.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pd3/p26/40585840.png?format=gallery-medium',
         'https://resources.cdn-kaspi.kz/img/m/p/p30/p51/44986526.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9b/p26/40585842.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/nepro100device-man-qz2-50-mm-chernyi-chernyi-117690906/'
    },
    {
      id: 143662037, categoryId: 3,
      name: 'Дрон AE AE60 Ultra черный',
      description: 'Квадрокоптер с высотой полёта 800 м, дальностью 12 км, 3-осевой стабилизацией, двумя аккумуляторами (50 мин), GPS/ГЛОНАСС и камерой 7680x4320.',
      price: 249990, rating: 4.9, likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe1/p9f/57090120.jpeg?format=gallery-medium  ',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/p9c/57090121.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p95/57090123.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p95/57090123.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nepro100device-man-qz2-50-mm-chernyi-chernyi-117690906/'
    },
  ];

  products: Product[] = [];
  categoryId: number | null = null;

  selectCategory(id: number) {
    this.categoryId = id ;
    this.products = this.allProducts.filter(p => p.categoryId === id);
  }

  onDeleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}