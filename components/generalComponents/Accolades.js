import Accolade from "./Accolade";

const Accolades = ({ accolades }) => {
  return (
    accolades.length && (
      <div className="fs-2-content-header divide-x divide-white/60 bg-gradient-to-r from-teal-650 to-green-450 text-white flex items-center justify-center py-6 px-10">
        {accolades.map((accolade, index) => (
          <Accolade key={index} accolade={accolade} />
        ))}
      </div>
    )
  );
};

export default Accolades;
