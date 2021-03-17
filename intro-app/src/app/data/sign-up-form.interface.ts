export interface SignUpData {
  email: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
  id: number;
}
