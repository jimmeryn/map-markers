export default async function getDataFromAddresses(
  { city, state, zip, address },
  setLocation
) {
  const response = await fetch(
    `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${encodeURI(
      city,
      state,
      zip,
      address
    )}&outFields=Match_addr,Addr_type`
  );

  const data = await response.json();

  setLocation(
    address,
    data.candidates[0].location.x,
    data.candidates[0].location.y
  );
}
