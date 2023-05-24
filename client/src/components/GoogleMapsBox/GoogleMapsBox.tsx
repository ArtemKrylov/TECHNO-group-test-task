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
  console.log(shopAddress);

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
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
      ></GoogleMap>
    </GoogleMapsBoxStyled>
  ) : (
    <div>Loading</div>
  );
};

export default GoogleMapsBox;
