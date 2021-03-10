import { IonCheckbox, IonFab, IonItem, IonLabel, IonNote, IonBadge, IonFabButton, IonIcon, IonButton } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { CameraResultType, Plugins } from '@capacitor/core';

const Home: React.FC<RouteComponentProps> = (props) => {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState('');
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setPhoto(image.webPath as string);
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonItem>
          <IonCheckbox slot="start" />

          <IonLabel>
            <h1>Create Idea</h1>
            <IonNote>Run Idea by Brandy</IonNote>
          </IonLabel>
          <IonBadge color="success" slot="end">
            5 Days
          </IonBadge>
        </IonItem>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <ExploreContainer />

        <img src={photo} />
        <IonButton onClick={takePhoto}>Take Photo!!</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
