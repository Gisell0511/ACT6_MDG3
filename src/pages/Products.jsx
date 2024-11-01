
import { Link } from 'react-router-dom';
import fresi from '../images/fresi.jpg';
import cherry from '../images/cheri.jpg';
import heart from '../images/heart.jpg';
import candy from '../images/candy.jpg';
import donut from '../images/donut.jpg';
import earring from '../images/earring.jpg';
import mickey from '../images/mickey.jpg';
import churro from '../images/churro.jpg';
import cofee from '../images/cofee.jpg';
import coconut from '../images/coconut.jpg';
import chocolate from '../images/chocolate.jpg';
import cookie from '../images/cookie.jpg';

function Products() {
    const products = [
        { id: 1, name: 'Strawberry earrings', price: 12.000, description: 'Aretes medianos de fresas', image: fresi},
        { id: 2, name: 'Cherry earrings', price: 10.000, description: 'Aretes medianos de cereza', image: cherry },
        { id: 3, name: 'Heart earrings', price: 5.000, description: 'Aretes pequeños de corazon', image: heart },
        { id: 4, name: 'Candy earrings', price: 8.000, description: 'Aretes pequeños en forma de dulce', image: candy },
        { id: 5, name: 'Donut errings', price: 20.000, description: 'Aretes grandes en forma de donas', image: donut },
        { id: 6, name: 'Ice cream earrings', price: 20.000, description: 'Aretes grandes en forma de helado', image: earring },
        { id: 7, name: 'mickey ', price: 18.000, description: 'Aretes medianos en forma de mickey', image: mickey },
        { id: 8, name: 'churro', price: 12.000, description: 'Aretes en medianos en forma de churros', image: churro },
        { id: 9, name: 'Coffee', price: 5.000, description: 'Aretes pequeños en forma de cafee', image: cofee },
        { id: 10, name: 'coconut', price: 7.000, description: 'Aretes pequeños en forma de coco', image: coconut },
        { id: 11, name: 'chocolate', price: 8.000, description: 'Aretes medianos en forma de chocolatina', image: chocolate },
        { id: 12, name: 'cookie', price: 6.000, description: 'Aretes pequeños en forma de galleta', image: cookie },
      ];

  return (
    <div className="products">
      <h2>Nuestros Productos</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/product?id=${product.id}`} className="view-details">
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
