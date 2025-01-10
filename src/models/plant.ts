export interface Plant {
    id: number;
    name: string;
    description: string;
    location: 'shade' | 'partial shade' | 'indirect sunlight' | 'direct sunlight';
    water: string;
    repotting: string;
    toxic: string;
    image: string;
  }