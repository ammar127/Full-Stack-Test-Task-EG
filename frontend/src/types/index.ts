export interface LoginDTO {
  email: string,
  password: string,
};

export interface RegisterDTO {
  name: string,
  email: string,
  password: string,
};

export interface User {
  email?: string | null,
  name?: string | null,
  token: string | null,
};