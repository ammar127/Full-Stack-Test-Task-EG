export interface LoginDTO {
  email: string,
  password: string,
};

export interface RegisterDTO {
  email: string,
  password: string,
};

export interface User {
  email?: string,
  name?: string,
  token: string,
};