import './CardImg.css';

export default function CardImg({ src, alt }) {
  return (
    <div className="CardImg-container">
      <img
        className="CardImg-content"
        onError={(event) => event.target.style.left = '-15px'}
        src={src}
        alt={alt}
      />
    </div>
  );
}
