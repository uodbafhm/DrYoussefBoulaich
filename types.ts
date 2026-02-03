
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface AppointmentData {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}
