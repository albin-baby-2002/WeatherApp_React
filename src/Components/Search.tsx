import axios from "axios";
import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { FaSearch } from "react-icons/fa";
import { TSearchProps } from "../Types/PropsTypes";
import { TCity } from "../Types/ApiResponseTypes";
import { DEFAULT_CITIES } from "../Data";
import { formatCoordinate } from "../Helpers/FormatCoordinates";
import { liveLocationOptionsCreater } from "../Api";
import { TSearch } from "../Types/StateTypes";

const Search: React.FC<TSearchProps> = ({ onSearchChange }) => {
    // selected location in search bar
  const [search, setSearch] = useState<TSearch>();

  useEffect(() => {
    const getLiveLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          const iso6709Format = `${formatCoordinate(
            latitude
          )}${formatCoordinate(longitude)}`;

          try {
            const options = liveLocationOptionsCreater(iso6709Format);

            const response = await axios.request(options);

            let city = response.data.data[0];

            let data = {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };

            if (city.latitude && city.longitude) {
              onSearchChange(data);
              setSearch(data);
            }
          } catch (err) {
            console.log("failed to fetch live location");
          }
        });
      }
    };

    getLiveLocation();
  }, []);

  const handleOnChange = (city: TSearch | null) => {
    if (city) {
      setSearch(city);
      onSearchChange(city);
    }
  };

  async function loadOptions(search: string) {
    const geoApioptions = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/places",
      params: {
        namePrefix: `${search}`,
      },
      headers: {
        "X-RapidAPI-Key": "a5e7cb4bcbmsh0359a619527d0d8p1adc28jsnd8fbc6062a01",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request<{ data: TCity[] }>(geoApioptions);

      let data = response.data.data;

      let options = data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`,
        };
      });

      return { options };
    } catch (err) {
      console.log("error getting cities data");
      return { options: DEFAULT_CITIES };
    }
  }

  return (
    <div>
      <AsyncPaginate
        placeholder=" search for city"
        debounceTimeout={600}
        value={search}
        loadOptions={loadOptions}
        onChange={handleOnChange}
        components={{
          DropdownIndicator: () => (
            <div className=" px-4">
              <FaSearch />
            </div>
          ),
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "20px",
            backgroundColor: "#e5e7eb",
          }),
          placeholder: (provided) => ({
            ...provided,
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
            fontWeight: "",
          }),
          singleValue: (provided) => ({
            ...provided,
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
          }),
          input: (provided) => ({
            ...provided,
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
          }),
        }}
      />
    </div>
  );
};

export default Search;
