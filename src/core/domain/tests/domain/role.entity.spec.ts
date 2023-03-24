import { describe, expect, it } from "@jest/globals";
import {Role} from "core/domain/entities/role.entity";
import { DomainException } from "core/domain/exceptions/exception.interface";

describe("Role entity", () => {
    describe("Role constructor", () => {
        it("should construct", () => {
            const role = new Role({id: 1, name: "jhon"});
            expect(role.props).toMatchObject({
                id: 1,
                name: "jhon",
            });
        });
    });

    describe("factories", () => {
        it("should create a admin role", () => {
            const role = Role.AdminFactory();

            expect(role.props).toMatchObject({
                id: 1,
                name: "admin",
            });
        });

        it("should create a controlador role", () => {
            const role = Role.ControladorFactory();

            expect(role.props).toMatchObject({
                id: 2,
                name: "controlador",
            });
        });

        it("should create a operador role", () => {
            const role = Role.OperadorFactory();

            expect(role.props).toMatchObject({
                id: 3,
                name: "operador",
            });
        });
    })

    describe("match", () => {
        it("should match 1 for admin", () => {
            const role = Role.match(1);
            expect(role.props).toMatchObject({
                id: 1,
                name: "admin"
            })
        })
        
        it("should match 2 for controlador", () => {
            const role = Role.match(2);
            expect(role.props).toMatchObject({
                id: 2,
                name: "controlador"
            })
        })

        it("should match 3 for operador", () => {
            const role = Role.match(3);
            expect(role.props).toMatchObject({
                id: 3,
                name: "operador"
            })
        })
    })

    describe("DomainExceptions", () => {
        it("should throw domain exception if id does not exist", () => {
            let err: DomainException | undefined;
            try {
                const role = Role.match(4);
            } catch (e) {
                err = e as DomainException;
            }
            expect(err).toBeDefined();
            expect(err?.status).toBe(422);
            expect(err?.message).toBe(`given input 4 is not a valid id`)
            expect(err?.fields).toStrictEqual(["id"]);
            expect(err?.entity).toStrictEqual(["Role"])
        })
    })
});