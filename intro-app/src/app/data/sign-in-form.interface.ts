export interface SignInData {
  email: string;
  password: string;
  remember?: boolean;
}

export interface SignInResponse {
  token: string;
}
