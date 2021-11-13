import './Card.css';

export default function Card(props) {
  const { width = '18rem', children, title, text, btnName } = props;

  return (
    <div className="Card" style={{ width: width }}>
      {children}
      <div className="Card-body">
        <h5 className="Card-title">{title}</h5>
        <p className="Card-text">{text}</p>
        <a href="#0" className="Card-btn">{btnName}</a>
      </div>
    </div>
  );
}
