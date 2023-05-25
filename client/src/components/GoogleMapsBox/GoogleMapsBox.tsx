import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { GoogleMapsBoxStyled } from './GoogleMapsBox.styled';
import { IShop } from 'utils/ts/models/shop';
import { DeliveryApp_API } from 'API/DeliveryApp_API';

interface GoogleMapsBoxProps {
  customer_address?: string;
  shop_id?: number;
}

//TODO in process
const GoogleMapsBox: React.FC<GoogleMapsBoxProps> = ({
  customer_address,
  shop_id,
}) => {
  const [shopAddress, setShopAddress] = useState<string>('');
  console.log('shopAddress: ', shopAddress);
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });
  console.log(shopAddress);

  useEffect(() => {
    async function getUserLocation() {
      function showPosition(position: any) {
        setUserLocation({
          lat: position?.coords?.latitude,
          lng: position?.coords?.longitude,
        });
      }
      await window.navigator.geolocation.getCurrentPosition(showPosition);
    }
    try {
      getUserLocation();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!shop_id) return;
    const fetchShops = async () => {
      const response: any = await DeliveryApp_API.getShops();
      setShopAddress(response.data.find((el: IShop) => el.id === shop_id));
    };
    try {
      fetchShops();
    } catch (error) {
      console.error(error);
    }
  }, [shop_id]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAmusjGusKn8m2ZeFcohs4dQd1oGbSIFIA',
  });
  return isLoaded ? (
    <GoogleMapsBoxStyled className="googleMapContainer">
      <p className="googleMapContainer__title">Your location: </p>
      {userLocation.lat !== 0 && (
        <GoogleMap
          center={userLocation}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          zoom={15}
        ></GoogleMap>
      )}
    </GoogleMapsBoxStyled>
  ) : (
    <div>Loading</div>
  );
};

export default GoogleMapsBox;
