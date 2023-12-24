'use client'
import { Country,City } from "country-state-city"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from 'react-select';
import { FaCity } from "react-icons/fa";
import { BsGlobeEuropeAfrica } from "react-icons/bs";

const options = Country.getAllCountries().map((country) =>({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,

}))

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityoptions = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

function PlacePicker() {
    const router = useRouter()
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityoptions>(null);

    const handleSelectedCountry = (options: option) =>{
        setSelectedCountry(options);
        setSelectedCity(null);
    }

    const handleSelectedCity = (options: cityoptions) =>{
        setSelectedCity(options);
        router.push(`location/${options?.value.name}/${options?.value.latitude}/${options?.value.longitude}`)
    }

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <BsGlobeEuropeAfrica size={14} />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          value={selectedCountry}
          onChange={handleSelectedCountry}
          className="dark:text-black dark:bg-[#495057]"
          options={options}
        />
      </div>

      {selectedCountry && (
        <div>
          <div className="flex items-center gap-1 mb-1">
            <FaCity size={14} />
            <label htmlFor="country">City</label>
          </div>
          <Select
            value={selectedCity}
            onChange={handleSelectedCity}
            className="dark:text-black dark:bg-[#495057]"
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default PlacePicker
