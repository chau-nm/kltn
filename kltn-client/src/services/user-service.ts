import {AccountData} from '~/fakedata'

const UserService = {
    login(username: string, password: string) {
        const user: UserModel[] = AccountData
                                    .filter(account => account.username === username 
                                        && account.password === password) as UserModel[];
        return user[0] as UserModel;
    }
}

export default UserService