import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>

      <IonFooter>
        <IonToolbar>Footer</IonToolbar>
        <IonToolbar>Footer</IonToolbar>
        <IonToolbar>Footer</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
