import { IonDatetime } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div style={{height: "150vh"}}></div>
      <IonDatetime />
    </div>
  );
};

export default ExploreContainer;
