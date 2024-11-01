import { useLocation, Link } from 'react-router-dom';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = parseInt(searchParams.get('id'));

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

  const product = products.find(p => p.id === productId);

  const handlePurchase = () => {
    toast.success('¡Producto comprado exitosamente!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <Link to="/products">Volver a productos</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
      </div>
      <div className="actions-container">
        <button onClick={handlePurchase} className="purchase-button">
          Comprar
        </button>
        <Link to="/products" className="back-button">
          Volver a productos
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;