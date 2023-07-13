import { UserResponse } from '../../entities/user-response.entity';

export class UserResponseBuilder {
    private readonly userResponse: UserResponse;

    constructor() {
        this.userResponse = new UserResponse();
    }

    public accessToken(accessToken: string): UserResponseBuilder {
        this.userResponse.accessToken = accessToken;

        return this;
    }

    public build(): UserResponse {
        return this.userResponse;
    }
}