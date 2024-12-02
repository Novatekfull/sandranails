
import { Link } from 'react-router-dom';


export default function Logo() {
  return (
    <Link to="/" className="flex ">
      <img
        src="assets/logo.png"
        alt="Nail Art de Luxe"
        className="w-[17%]   "
      />

    </Link>
  );
}
