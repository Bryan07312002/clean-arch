import { describe, it, expect } from "@jest/globals";
import { User } from "core/domain/entities/user.entity";
import {Role} from "core/domain/entities/role.entity";

describe("User entity", () => {
    describe("constructor", () => {
        it("should construct with default role controlador and default active", () => {
            const user = new User({
                username: "jhon",
                password: "password"
            });

            expect(user.props.username).toBe("jhon");
            expect(user.props.password).toBe("password");
            expect(user.props.role).toBeInstanceOf(Role);
            expect(user.props.active).toBe(true);
        })
    });
});