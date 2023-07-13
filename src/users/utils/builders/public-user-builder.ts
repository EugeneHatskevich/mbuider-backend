import { PublicUser } from '../../entities/public-user.entity';

export class PublicUserBuilder {
    private readonly publicUser: PublicUser;

    constructor() {
        this.publicUser = new PublicUser();
    }

    public id(id: number): PublicUserBuilder {
        this.publicUser.id = id;
        return this;
    }

    public email(email: string): PublicUserBuilder {
        this.publicUser.email = email;
        return this;
    }

    public firstName(firstName: string): PublicUserBuilder {
        this.publicUser.firstName = firstName;
        return this;
    }

    public lastName(lastName: string): PublicUserBuilder {
        this.publicUser.lastName = lastName;
        return this;
    }

    public isActive(isActive: boolean): PublicUserBuilder {
        this.publicUser.isActive = isActive;
        return this;
    }

    public build(): PublicUser {
        return this.publicUser;
    }
}