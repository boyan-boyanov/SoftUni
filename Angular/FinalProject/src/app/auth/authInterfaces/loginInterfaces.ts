export class IloginUser {
    constructor(
        public email: string,
        public password: string,       
    ) { }
}

export class IRegisterUser {
    constructor(
        public username: string,
        public email: string,
        public password: string,
        public repass: string,       
    ) { }
}