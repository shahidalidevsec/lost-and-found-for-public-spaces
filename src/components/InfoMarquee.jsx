

const InfoMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-red-600 text-white">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] whitespace-nowrap">
        
        <span className="px-10 py-3 text-1xl font-2xl">
          Welcome to Lost & Found Service • Report lost items and help others
          find their belongings • Found something? Post it on our platform •
          Search for lost and found items easily • Keep your belongings safe •
          Together we can help reunite people with their lost belongings •
        </span>

        <span className="px-10 py-3 text-1xl font-2xl">
          Welcome to Lost & Found Service • Report lost items and help others
          find their belongings • Found something? Post it on our platform •
          Search for lost and found items easily • Keep your belongings safe •
          Together we can help reunite people with their lost belongings •
        </span>

      </div>

      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default InfoMarquee;