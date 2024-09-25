
const CompanyLogos = ({ className, showTag, logoList }) => {
  return (
    <div className={className}>
      {showTag && (
        <h5 className="tagline text-center text-n-1/50">
          Helping our clients stay up to date
        </h5>
      )}
      <ul className="flex">
        {logoList.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[7rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
