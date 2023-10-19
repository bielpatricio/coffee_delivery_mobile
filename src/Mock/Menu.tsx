import { Image } from 'native-base'

import americano from '../assets/coffee/Americano.png'
import arabe from '../assets/coffee/Arabe.png'
import cafeComLeite from '../assets/coffee/CafeComLeite.png'
import cafeGelado from '../assets/coffee/CafeGelado.png'
import capuccino from '../assets/coffee/Capuccino.png'
import chocolateQuente from '../assets/coffee/ChocolateQuente.png'
import cubano from '../assets/coffee/Cubano.png'
import expressoCremoso from '../assets/coffee/ExpressoCremoso.png'
import expresso from '../assets/coffee/Expresso.png'
import havaiano from '../assets/coffee/Havaiano.png'
import irlandes from '../assets/coffee/Irlandes.png'
import latte from '../assets/coffee/Latte.png'
import macchiato from '../assets/coffee/Macchiato.png'
import mocaccino from '../assets/coffee/Mochaccino.png'

export const MenuCoffee = [
  {
    id: 'Expresso Tradicional',
    name: 'Expresso Tradicional',
    amount: 0,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
    subName: 'Expresso',
    image: (
      <Image
        source={expresso}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional'],
  },
  {
    id: 'Expresso Americano',
    name: 'Expresso Americano',
    amount: 0,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.99,
    subName: 'Americano',
    image: (
      <Image
        source={americano}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional'],
  },
  {
    id: 'Expresso Cremoso',
    name: 'Expresso Cremoso',
    amount: 0,
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.99,
    subName: 'Expresso Cremoso',
    image: (
      <Image
        source={expressoCremoso}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional'],
  },
  {
    id: 'Expresso Gelado',
    name: 'Expresso Gelado',
    amount: 0,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.99,
    subName: 'Café Gelado',
    image: (
      <Image
        source={cafeGelado}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional', 'gelado'],
  },
  {
    id: 'Café com Leite',
    name: 'Café com Leite',
    amount: 0,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.99,
    subName: 'Café com Leite',
    image: (
      <Image
        source={cafeComLeite}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: 'Latte',
    name: 'Latte',
    amount: 0,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.99,
    subName: 'Latte',
    image: (
      <Image
        source={latte}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: 'Capuccino',
    name: 'Capuccino',
    amount: 0,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.99,
    subName: 'Capuccino',
    image: (
      <Image
        source={capuccino}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: 'Macchiato',
    name: 'Macchiato',
    amount: 0,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.99,
    subName: 'Macchiato',
    image: (
      <Image
        source={macchiato}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: 'Mocaccino',
    name: 'Mocaccino',
    amount: 0,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.99,
    subName: 'Mocaccino',
    image: (
      <Image
        source={mocaccino}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: 'Chocolate Quente',
    name: 'Chocolate Quente',
    amount: 0,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.99,
    subName: 'Chocolate Quente',
    image: (
      <Image
        source={chocolateQuente}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['especial', 'com leite'],
  },
  {
    id: 'Cubano',
    name: 'Cubano',
    amount: 0,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.99,
    subName: 'Cubano',
    image: (
      <Image
        source={cubano}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 'Havaiano',
    name: 'Havaiano',
    amount: 0,
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.99,
    subName: 'Havaiano',
    image: (
      <Image
        source={havaiano}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['especial'],
  },
  {
    id: 'Árabe',
    name: 'Árabe',
    amount: 0,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.99,
    subName: 'Árabe',
    image: (
      <Image
        source={arabe}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['especial'],
  },
  {
    id: 'Irlandês',
    name: 'Irlandês',
    amount: 0,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.99,
    subName: 'Irlandês',
    image: (
      <Image
        source={irlandes}
        alt="Logo"
        resizeMode="contain"
        h={90}
        alignSelf="center"
        mb={2}
        mt={-16}
      />
    ),
    tags: ['especial', 'alcoólico'],
  },
]
