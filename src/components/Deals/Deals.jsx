import PropTypes from 'prop-types';
import "../Deals/deals.css"

const BestDeals = ({ title,deals }) => {
  return (
    <section className="best-deals">
      <div className="deals">
        <div className="deals-head">
          <h2>{title}</h2>
          <svg
            width="16"
            height="16"
            fill="none"
            className="btn-next"
            viewBox="0 0 17 17"
            style={{
              marginLeft: '4px',
              marginRight: '4px',
              marginTop: '4px',
              marginBottom: '4px',
            }}
          >
            <path
              d="m6.627 3.749 5 5-5 5"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="products">
          {deals.map((deal, index) => (
            
            <div className="product" key={index}>
              <img src={deal.imgSrc} alt={deal.altText} />
              <p>{deal.name}</p>
              <p>{deal.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

BestDeals.propTypes = {
  deals: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired
};

export default BestDeals;
