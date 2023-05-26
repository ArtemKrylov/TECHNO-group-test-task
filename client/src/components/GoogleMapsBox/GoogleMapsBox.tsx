import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { GoogleMapsBoxStyled } from './GoogleMapsBox.styled';
import { IShop } from 'utils/ts/models/shop';
import { DeliveryApp_API } from 'API/DeliveryApp_API';
import axios from 'axios';
import { ILocation } from 'utils/ts/models/location';

interface GoogleMapsBoxProps {
  customer_address?: string;
  shop_id?: number;
}

//TODO in process
const GoogleMapsBox: React.FC<GoogleMapsBoxProps> = ({
  customer_address,
  shop_id,
}) => {
  const [currentShopData, setCurrentShopData] = useState<IShop | null>();

  const [userLocation, setUserLocation] = useState<ILocation>({
    lat: 0,
    lng: 0,
  });
  const [shopLocation, setShopLocation] = useState<ILocation>({
    lat: 0,
    lng: 0,
  });

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

  //getting and setting to state shops` location
  useEffect(() => {
    async function getShopLocation() {
      if (!currentShopData) return;
      if (!currentShopData.id) return;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          currentShopData.shopAddress
        }&key=${'AIzaSyAmusjGusKn8m2ZeFcohs4dQd1oGbSIFIA'}`
      );
      if (response.data.results.length === 0) return;
      const { lat, lng }: { lat: number; lng: number } =
        response.data.results[0].geometry.location;
      setShopLocation({ lat, lng });
    }
    try {
      getShopLocation();
    } catch (error) {
      console.error(error);
    }
  }, [currentShopData]);

  useEffect(() => {
    if (!shop_id) return;
    const fetchShops = async () => {
      const { data }: any = await DeliveryApp_API.getShops();
      const currentShop = data.find((el: IShop) => el.id === shop_id);
      setCurrentShopData({
        id: currentShop.id,
        name: currentShop.name,
        shopAddress: currentShop.shopaddress,
      });
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
      {currentShopData && shopLocation.lat !== 0 && (
        <GoogleMap
          center={shopLocation}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          zoom={14}
        >
          <Marker
            position={userLocation}
            draggable={true}
            label={{ text: 'You' }}
          />
          <Marker
            position={shopLocation}
            draggable={true}
            label={{ text: currentShopData?.name ?? 'Your shop' }}
          />
        </GoogleMap>
      )}
    </GoogleMapsBoxStyled>
  ) : (
    <div>Loading</div>
  );
};

export default GoogleMapsBox;
