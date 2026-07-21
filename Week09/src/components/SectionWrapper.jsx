import PropTypes from 'prop-types';

const SectionWrapper = ({ title, subtitle, backgroundColor = '#fff', children }) => {
  return (
    <div
      className="section-wrapper py-5 px-4 mb-5 rounded-4"
      style={{ backgroundColor }}
    >
      <div className="section-header text-center mb-4">
        <h2 className="fw-bold section-title">{title}</h2>
        {subtitle && <p className="text-muted section-subtitle mt-2">{subtitle}</p>}
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SectionWrapper;
