import FeatureSection4Item from "./FeatureSection4Item";

const FeatureSection4 = ({ specialityList }) => {
  return (
    <section className="page-section feature-section-4 relative overflow-hidden mb-14">
      <div className="container mx-auto px-28 relative">
        <div className="fs-4-content grid grid-cols-4 gap-3">
          {specialityList.length &&
            specialityList.map((speciality, index) => (
              <FeatureSection4Item key={index} speciality={speciality} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection4;
