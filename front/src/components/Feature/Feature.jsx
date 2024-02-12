import { PropTypes } from 'prop-types';

function Feature(props) {
    const ICON = props.icon;
    const ALT_IMG = props.altImg;
    const TEXT_H3 = props.textH3;
    const TEXT_P = props.textP;
    return (
        <div className="feature-item">
            <img src={ICON} alt={ALT_IMG} className="feature-icon" />
            <h3 className="feature-item-title">{TEXT_H3}</h3>
            <p>{TEXT_P}</p>
        </div>
    )
}

Feature.propTypes = {
    icon: PropTypes.string,
    altImg: PropTypes.string,
    textH3: PropTypes.string,
    textP: PropTypes.string
}

export default Feature;