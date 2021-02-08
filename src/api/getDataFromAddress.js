export default async function getDataFromAddresses({
  city,
  state,
  zip,
  address,
}) {
  const response = await fetch(
    `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${encodeURI(
      city,
      state,
      zip,
      address
    )}&outFields=Match_addr,Addr_type`
  );

  const data = await response.json();

  return {
    address,
    x: data.candidates[0].location.x,
    y: data.candidates[0].location.y,
  };
}
