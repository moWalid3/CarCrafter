export interface User {
	name: string;
	email: string;
	password: string;
	rePassword: string;
	phone: string;
}

export interface AuthRes {
	message: string;
	user: {
    name: string;
    email: string;
    role: string;
  }
	token: string;
}
