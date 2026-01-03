export enum AppId {
  MY_COMPUTER = 'my_computer',
  MY_DOCUMENTS = 'my_documents',
  INTERNET_EXPLORER = 'internet_explorer',
  OUTLOOK_EXPRESS = 'outlook_express',
  MEDIA_PLAYER = 'media_player',
  CONTROL_PANEL = 'control_panel'
}

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Experience {
  company: string;
  duration: string;
  roles: Role[];
  location: string;
}

export interface Role {
  title: string;
  period: string;
  details: string[];
}

export interface Skill {
  category: string;
  items: string[];
}