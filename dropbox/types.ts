export type FileType = {
  id: string;
  fileName: string;
  fullName: string;
  timeStamp: Date;
  downloadUrl: string;
  type: string;
  size: string;
};

export type UserData = {
  icon: JSX.Element;
  name: string;
  title: string;
  cost: string;
  users: string;
  storage: string;
  time: string;
  delivery: string;
  features: string;
};

export type features = {
  icon: JSX.Element;
  title: string;
  desc: string;
};