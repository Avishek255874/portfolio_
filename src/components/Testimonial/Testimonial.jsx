
import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

const Testimonial = ({ data }) => {
  const { testimonialInfo, brandInfo } = data;
  return (
    <section className="section testimonials-section bg-g">
      <div className="container">
        <SectionHeading title="LANGUAGES I AM DOING" subTitle="Languages" />
     
        <div className="testimonials-brand">
          <Carousel data={brandInfo} />
        </div>
      </div>
    </section >
  )
}
Testimonial.propTypes = {
  data: PropTypes.object
}

export default Testimonial
